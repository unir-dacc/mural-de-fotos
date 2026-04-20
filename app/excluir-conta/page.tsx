import Link from "next/link";
import { ArrowLeft, Trash2, ShieldAlert, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";

export const metadata = {
  title: "Excluir Conta — Mural UNIR",
  description:
    "Saiba como solicitar a exclusão da sua conta e dos seus dados no Mural UNIR (DACC/UNIR).",
};

export default function DeleteAccountPage() {
  return (
    <>
      <Header />
      <main className="container max-w-3xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para o mural
            </Link>
          </Button>

          <h1 className="text-3xl font-bold mb-1">Exclusão de Conta</h1>
          <p className="text-muted-foreground text-sm">
            Mural UNIR — desenvolvido pelo DACC/UNIR
          </p>
        </div>

        <div className="space-y-8 text-sm leading-relaxed">
          {/* Intro */}
          <section className="space-y-2">
            <p>
              Você pode solicitar a exclusão completa da sua conta no{" "}
              <strong>Mural UNIR</strong> a qualquer momento. Esta página
              descreve as etapas para fazer a solicitação, quais dados são
              excluídos e quais podem ser retidos por obrigação legal.
            </p>
          </section>

          {/* Steps */}
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <Trash2 className="h-5 w-5 text-destructive shrink-0" />
              <h2 className="text-xl font-semibold">
                Como solicitar a exclusão da conta
              </h2>
            </div>

            <ol className="space-y-4 list-none">
              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                  1
                </span>
                <div>
                  <p className="font-medium">Pelo aplicativo ou site</p>
                  <p className="text-muted-foreground">
                    Acesse{" "}
                    <Link href="/login" className="text-primary hover:underline">
                      sua conta
                    </Link>
                    , vá em <strong>Perfil → Configurações → Excluir
                    Conta</strong> e confirme a exclusão.
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                  2
                </span>
                <div>
                  <p className="font-medium">Por e-mail</p>
                  <p className="text-muted-foreground">
                    Envie um e-mail para{" "}
                    <a
                      href="mailto:dacc@unir.br?subject=Solicita%C3%A7%C3%A3o%20de%20exclus%C3%A3o%20de%20conta%20%E2%80%94%20Mural%20UNIR"
                      className="text-primary hover:underline"
                    >
                      dacc@unir.br
                    </a>{" "}
                    com o assunto{" "}
                    <strong>
                      &quot;Solicitação de exclusão de conta — Mural UNIR&quot;
                    </strong>{" "}
                    informando o e-mail cadastrado na sua conta.
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                  3
                </span>
                <div>
                  <p className="font-medium">Prazo de atendimento</p>
                  <p className="text-muted-foreground">
                    A solicitação será processada em até{" "}
                    <strong>15 dias úteis</strong>, conforme previsto na LGPD
                    (Lei nº 13.709/2018).
                  </p>
                </div>
              </li>
            </ol>
          </section>

          {/* Data deleted */}
          <section className="space-y-3">
            <div className="flex items-center gap-2">
              <ShieldAlert className="h-5 w-5 shrink-0" />
              <h2 className="text-xl font-semibold">
                O que é excluído e o que é mantido
              </h2>
            </div>

            <div className="rounded-lg border overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold">Dado</th>
                    <th className="text-left px-4 py-3 font-semibold">
                      Ação após exclusão
                    </th>
                    <th className="text-left px-4 py-3 font-semibold">
                      Período de retenção
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="px-4 py-3">
                      Nome, e-mail e CPF
                    </td>
                    <td className="px-4 py-3 text-destructive font-medium">
                      Excluído permanentemente
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      Nenhum
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Senha (hash)</td>
                    <td className="px-4 py-3 text-destructive font-medium">
                      Excluído permanentemente
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      Nenhum
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Foto de perfil</td>
                    <td className="px-4 py-3 text-destructive font-medium">
                      Excluído permanentemente
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      Nenhum
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">Fotos publicadas</td>
                    <td className="px-4 py-3 text-destructive font-medium">
                      Excluídas permanentemente
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      Nenhum
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3">
                      Comentários e curtidas
                    </td>
                    <td className="px-4 py-3 text-destructive font-medium">
                      Excluídos permanentemente
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      Nenhum
                    </td>
                  </tr>
                  <tr className="bg-muted/20">
                    <td className="px-4 py-3">
                      Registros de acesso (logs)
                    </td>
                    <td className="px-4 py-3 text-amber-600 dark:text-amber-400 font-medium">
                      Mantido temporariamente
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      6 meses¹
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex gap-2 text-xs text-muted-foreground">
              <Clock className="h-4 w-4 shrink-0 mt-0.5" />
              <p>
                ¹ Os registros de acesso (endereço IP e data/hora das conexões)
                são mantidos por <strong>6 (seis) meses</strong> após a exclusão
                da conta, por exigência legal do art. 15 da Lei nº 12.965/2014
                (Marco Civil da Internet). Após esse prazo, são eliminados
                definitivamente.
              </p>
            </div>
          </section>

          {/* Contact */}
          <section className="space-y-2 rounded-lg border p-4 bg-muted/30">
            <h2 className="font-semibold">Dúvidas?</h2>
            <p className="text-muted-foreground">
              Entre em contato pelo e-mail{" "}
              <a
                href="mailto:dacc@unir.br"
                className="text-primary hover:underline"
              >
                dacc@unir.br
              </a>
              . Para mais informações sobre como tratamos seus dados, consulte
              nossa{" "}
              <Link
                href="/politica-de-privacidade"
                className="text-primary hover:underline"
              >
                Política de Privacidade
              </Link>
              .
            </p>
          </section>
        </div>

        <div className="mt-10 pt-6 border-t text-center text-sm text-muted-foreground flex justify-center gap-4">
          <Link href="/termos-de-uso" className="hover:underline">
            Termos de Uso
          </Link>
          <Link href="/politica-de-privacidade" className="hover:underline">
            Política de Privacidade
          </Link>
        </div>
      </main>
    </>
  );
}
