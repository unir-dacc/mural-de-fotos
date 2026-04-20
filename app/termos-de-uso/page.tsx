import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";

export const metadata = {
  title: "Termos de Uso — Mural UNIR",
  description:
    "Termos de Uso do Mural UNIR, em conformidade com o Marco Civil da Internet (Lei nº 12.965/2014) e demais normas aplicáveis.",
};

export default function TermsOfUsePage() {
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

          <h1 className="text-3xl font-bold mb-1">Termos de Uso</h1>
          <p className="text-sm text-muted-foreground">
            Última atualização: abril de 2025
          </p>
        </div>

        <div className="space-y-8 text-sm leading-relaxed">
          <section className="space-y-2">
            <p>
              Bem-vindo ao <strong>Mural UNIR</strong>, plataforma de
              compartilhamento de fotos mantida pelo Diretório Acadêmico do
              Curso de Ciência da Computação (DACC) da{" "}
              <strong>Universidade Federal de Rondônia — UNIR</strong>. Ao
              acessar ou utilizar este serviço, você declara ter lido,
              compreendido e concordado com os presentes Termos de Uso, bem como
              com nossa{" "}
              <Link
                href="/politica-de-privacidade"
                className="text-primary hover:underline"
              >
                Política de Privacidade
              </Link>
              .
            </p>
            <p>
              Estes Termos são regidos pela{" "}
              <strong>Lei nº 12.965/2014 (Marco Civil da Internet)</strong>, pela{" "}
              <strong>Lei nº 13.709/2018 (LGPD)</strong> e demais normas
              brasileiras aplicáveis. Se você não concordar com estes termos,
              não utilize o serviço.
            </p>
          </section>

          {/* 1 */}
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">1. Descrição do Serviço</h2>
            <p>
              O Mural UNIR é uma plataforma digital que permite que membros da
              comunidade acadêmica da UNIR (estudantes, professores e
              servidores) publiquem, curtam e comentem fotos relacionadas ao
              ambiente universitário. O serviço é gratuito e sem fins
              comerciais.
            </p>
          </section>

          {/* 2 */}
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">2. Elegibilidade e Cadastro</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                O uso da plataforma é destinado a membros da comunidade
                acadêmica da UNIR ou qualquer pessoa autorizada pelos
                administradores.
              </li>
              <li>
                Você deve ter capacidade civil para celebrar contratos. Menores
                de 18 anos devem ter autorização de seus responsáveis legais.
              </li>
              <li>
                Cada usuário pode ter apenas uma conta. A criação de contas
                falsas ou duplicadas é proibida.
              </li>
              <li>
                Você é responsável pela veracidade das informações fornecidas no
                cadastro e pela confidencialidade de sua senha.
              </li>
              <li>
                Notifique-nos imediatamente em caso de uso não autorizado de sua
                conta.
              </li>
            </ul>
          </section>

          {/* 3 */}
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">
              3. Conteúdo do Usuário
            </h2>
            <p>
              Ao publicar fotos, comentários ou qualquer outro conteúdo
              (&quot;Conteúdo do Usuário&quot;), você declara e garante que:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                É titular dos direitos sobre o conteúdo ou possui autorização
                dos titulares para publicá-lo;
              </li>
              <li>
                Obteve o consentimento das pessoas identificáveis nas imagens,
                conforme exigido pela LGPD e pela Lei nº 9.610/1998 (Lei de
                Direitos Autorais);
              </li>
              <li>
                O conteúdo não viola direitos de terceiros, leis ou estes
                Termos.
              </li>
            </ul>
            <p>
              Ao publicar Conteúdo do Usuário, você concede ao Mural UNIR uma
              licença não exclusiva, gratuita e revogável para exibir, armazenar
              e reproduzir o conteúdo na plataforma, exclusivamente para a
              prestação do serviço.
            </p>
          </section>

          {/* 4 */}
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">4. Condutas Proibidas</h2>
            <p>É expressamente proibido:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Publicar conteúdo ilegal, ofensivo, discriminatório, de ódio,
                pornográfico ou que viole a dignidade de qualquer pessoa;
              </li>
              <li>
                Divulgar dados pessoais de terceiros sem consentimento
                (violação à LGPD);
              </li>
              <li>
                Utilizar a plataforma para fins comerciais, spam ou publicidade
                não autorizada;
              </li>
              <li>
                Tentar acessar sistemas, dados ou funcionalidades sem
                autorização (art. 154-A do Código Penal — crimes cibernéticos);
              </li>
              <li>
                Impersonar outra pessoa ou entidade;
              </li>
              <li>
                Realizar qualquer ação que prejudique o funcionamento,
                desempenho ou segurança da plataforma.
              </li>
            </ul>
          </section>

          {/* 5 */}
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">
              5. Moderação e Remoção de Conteúdo
            </h2>
            <p>
              Os administradores do Mural UNIR reservam-se o direito de remover,
              sem aviso prévio, qualquer conteúdo que viole estes Termos ou as
              leis aplicáveis, bem como suspender ou encerrar contas de
              usuários infratores.
            </p>
            <p>
              Nos termos do art. 19 do Marco Civil da Internet, o provedor de
              aplicações somente será responsabilizado por danos decorrentes de
              conteúdo gerado por terceiros se, após ordem judicial específica,
              não tomar as providências necessárias para a remoção do conteúdo.
            </p>
          </section>

          {/* 6 */}
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">
              6. Propriedade Intelectual
            </h2>
            <p>
              A estrutura, design, código-fonte e marca do Mural UNIR são
              protegidos pela Lei nº 9.610/1998. O código-fonte do projeto está
              disponível sob licença de código aberto (open source) no GitHub.
            </p>
            <p>
              O conteúdo publicado pelos usuários permanece de titularidade de
              seus respectivos autores. O Mural UNIR não reivindica propriedade
              sobre o Conteúdo do Usuário.
            </p>
          </section>

          {/* 7 */}
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">
              7. Isenção e Limitação de Responsabilidade
            </h2>
            <p>
              O serviço é fornecido &quot;como está&quot;, sem garantias de
              disponibilidade contínua. O DACC/UNIR não se responsabiliza por:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Perdas de dados decorrentes de falhas técnicas ou atos de
                terceiros;
              </li>
              <li>
                Conteúdo publicado por usuários, nos termos do art. 19 do Marco
                Civil da Internet;
              </li>
              <li>
                Danos indiretos, lucros cessantes ou danos morais decorrentes do
                uso ou impossibilidade de uso da plataforma.
              </li>
            </ul>
          </section>

          {/* 8 */}
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">8. Encerramento de Conta</h2>
            <p>
              Você pode solicitar o encerramento de sua conta a qualquer momento
              entrando em contato pelo e-mail{" "}
              <a
                href="mailto:dacc@unir.br"
                className="text-primary hover:underline"
              >
                dacc@unir.br
              </a>
              . Após o encerramento, seus dados serão tratados conforme nossa{" "}
              <Link
                href="/politica-de-privacidade"
                className="text-primary hover:underline"
              >
                Política de Privacidade
              </Link>
              .
            </p>
          </section>

          {/* 9 */}
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">
              9. Alterações nos Termos
            </h2>
            <p>
              Podemos modificar estes Termos a qualquer momento. Alterações
              relevantes serão comunicadas por e-mail ou aviso na plataforma com
              antecedência mínima de <strong>10 dias</strong>. O uso continuado
              do serviço após esse prazo implica concordância com os novos
              Termos.
            </p>
          </section>

          {/* 10 */}
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">
              10. Legislação Aplicável e Foro
            </h2>
            <p>
              Estes Termos são regidos pelas leis da República Federativa do
              Brasil. Fica eleito o foro da comarca de{" "}
              <strong>Porto Velho — RO</strong> para dirimir quaisquer
              controvérsias decorrentes destes Termos, salvo disposição legal em
              contrário.
            </p>
          </section>

          {/* 11 */}
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">11. Contato</h2>
            <p>
              Em caso de dúvidas, sugestões ou denúncias, entre em contato pelo
              e-mail:{" "}
              <a
                href="mailto:dacc@unir.br"
                className="text-primary hover:underline"
              >
                dacc@unir.br
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-10 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>
            Leia também nossa{" "}
            <Link
              href="/politica-de-privacidade"
              className="text-primary hover:underline"
            >
              Política de Privacidade
            </Link>
            .
          </p>
        </div>
      </main>
    </>
  );
}
