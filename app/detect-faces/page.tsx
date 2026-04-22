"use client";

import { useState, useEffect, useRef } from "react";
import api from "@/lib/api";
import Header from "@/components/header";
import { useAuth } from "@/context/auth-context";
import { useIsClient } from "@/hooks/use-is-client";
import { LabelClusterDialog } from "./components/dialog";
import { ClusterCard } from "./components/cluster-card";

type BBox = {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
};

export type LabelingEntity = {
  id: string;
  entityPath: string;
  bbox: BBox;
  className: string;
  confidence: number;
  name: string | null;
  isAboveThreshold: boolean;
  mediaId: string;
  clusterId: string;
  userId: string | null;
  media: {
    id: string;
    order: number;
    imageUrl: string;
    isVideo: boolean;
    createdAt: string;
    updatedAt: string;
    isProcessed: boolean;
    postId: string;
  };
};

export type LabelingCluster = {
  id: string;
  name: string | null;
  description: string | null;
  threshold: number;
  createdAt: string;
  updatedAt: string;
  userId: string | null;
  entities: LabelingEntity[];
  user: {
    id: string;
    name: string;
    email: string;
    avatarUrl: string | null;
  } | null;
};

export type Meta = {
  total: number;
  lastPage: number;
  currentPage: number;
  perPage: number;
  prev: number | null;
  next: number | null;
};

const PAGE_SIZE = 2000000;

function useAuthToken(isClient: boolean) {
  const [token, setToken] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!isClient) return;
    const saved = localStorage.getItem("token");
    setToken(saved);
    setLoaded(true);
  }, [isClient]);

  return { token, loaded };
}

export default function DetectFacesPage() {
  const isClient = useIsClient();
  const { user } = useAuth();
  const isAuthenticated = Boolean(user);
  const { token, loaded: tokenLoaded } = useAuthToken(isClient);

  const [clusters, setClusters] = useState<LabelingCluster[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const loadingRef = useRef(false);
  const hasMoreRef = useRef(true);
  const pageRef = useRef(1);
  const tokenRef = useRef(token);
  const isAuthenticatedRef = useRef(isAuthenticated);

  const [open, setOpen] = useState(false);
  const [selectedCluster, setSelectedCluster] =
    useState<LabelingCluster | null>(null);

  // Keep refs in sync so the observer callback always has latest values
  useEffect(() => {
    tokenRef.current = token;
    isAuthenticatedRef.current = isAuthenticated;
  }, [token, isAuthenticated]);

  const fetchNextPage = useRef(async () => {
    if (loadingRef.current || !hasMoreRef.current) return;
    loadingRef.current = true;
    setLoading(true);
    setError(null);

    const p = pageRef.current;

    try {
      const headers =
        isAuthenticatedRef.current && tokenRef.current
          ? {
              Accept: "application/json",
              "Content-Type": "application/json",
              Authorization: `Bearer ${tokenRef.current}`,
            }
          : undefined;

      const response = await api.get("/labeling", {
        headers,
        params: { limit: PAGE_SIZE, page: p },
      });

      const data: LabelingCluster[] = response.data.data || [];
      const meta: Meta = response.data.meta || {
        total: 0,
        lastPage: 1,
        currentPage: 1,
        perPage: PAGE_SIZE,
        prev: null,
        next: null,
      };

      if (p === 1) {
        setClusters(data);
      } else {
        setClusters((prev) => {
          const existingIds = new Set(prev.map((c) => c.id));
          const unique = data.filter((c) => !existingIds.has(c.id));
          return unique.length > 0 ? [...prev, ...unique] : prev;
        });
      }

      const more = meta.currentPage < meta.lastPage;
      hasMoreRef.current = more;
      setHasMore(more);

      if (more) {
        pageRef.current = p + 1;
      }
    } catch (err) {
      console.error("Erro ao buscar labeling:", err);
      setError("Não foi possível carregar os rostos para classificação.");
      hasMoreRef.current = false;
      setHasMore(false);
    } finally {
      loadingRef.current = false;
      setLoading(false);
    }
  });

  // Initial load once token is ready
  useEffect(() => {
    if (!tokenLoaded) return;
    fetchNextPage.current();
  }, [tokenLoaded]);

  // IntersectionObserver watches the sentinel element
  useEffect(() => {
    if (!isClient) return;

    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage.current();
        }
      },
      { rootMargin: "300px", threshold: 0 },
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, [isClient]);

  const openClusterModal = (cluster: LabelingCluster) => {
    setSelectedCluster(cluster);
    setOpen(true);
  };

  const handleClusterLabeled = (updated: LabelingCluster) => {
    setClusters((prev) => prev.map((c) => (c.id === updated.id ? updated : c)));
  };

  const hasClusters = clusters.length > 0;

  return (
    <>
      <Header />
      <main className="container mx-auto max-w-6xl px-4 py-6">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold">Ajude a classificar minha IA</h1>
            <p className="text-sm text-muted-foreground">
              Agrupamos rostos parecidos em clusters. Selecione quem é quem para
              melhorar o reconhecimento, como no Google Fotos.
            </p>
          </div>
        </div>

        {error && (
          <div className="mb-4 rounded-lg border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {clusters.map((cluster) => (
            <ClusterCard
              key={cluster.id}
              cluster={cluster}
              onClick={() => openClusterModal(cluster)}
            />
          ))}
        </div>

        {!loading && !hasClusters && (
          <div className="py-12 text-center text-muted-foreground">
            Nenhum rosto detectado para classificação.
          </div>
        )}

        {loading && !hasClusters && (
          <div className="py-12 text-center text-muted-foreground">
            Carregando rostos...
          </div>
        )}

        {hasMore && <div ref={sentinelRef} className="h-1" />}

        <LabelClusterDialog
          open={open}
          onOpenChange={(value) => {
            setOpen(value);
            if (!value) setSelectedCluster(null);
          }}
          cluster={selectedCluster}
          token={token}
          isAuthenticated={isAuthenticated}
          onClusterLabeled={handleClusterLabeled}
        />
      </main>
    </>
  );
}
