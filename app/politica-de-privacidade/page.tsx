import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";

export const metadata = {
  title: "Política de Privacidade — Mural de Fotos UNIR",
  description:
    "Política de Privacidade do Mural de Fotos UNIR, em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).",
};

export default function PrivacyPolicyPage() {
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

          <h1 className="text-3xl font-bold mb-1">Política de Privacidade</h1>
          <p className="text-sm text-muted-foreground">
            Última atualização: abril de 2025
          </p>
        </div>

        <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8 text-sm leading-relaxed">
          <section className="space-y-2">
            <p>
              O <strong>Mural de Fotos UNIR</strong> é um projeto acadêmico
              desenvolvido por <strong>Ricardo Alves da Silva</strong> para o
              Diretório Acadêmico do Curso de Ciência da Computação (DACC) da{" "}
              <strong>Universidade Federal de Rondônia — UNIR</strong>. Esta Política de Privacidade descreve como coletamos, usamos,
              armazenamos e protegemos seus dados pessoais, em conformidade com
              a{" "}
              <strong>
                Lei Geral de Proteção de Dados Pessoais (LGPD — Lei nº
                13.709/2018)
              </strong>
              .
            </p>
          </section>

          {/* 1 */}
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">
              1. Controlador dos Dados
            </h2>
            <p>
              O controlador responsável pelo tratamento dos dados pessoais é{" "}
              <strong>Ricardo Alves da Silva</strong>, desenvolvedor do{" "}
              <strong>Mural de Fotos UNIR</strong>. Para exercer seus direitos ou
              esclarecer dúvidas, entre em contato pelo e-mail:{" "}
              <a
                href="mailto:dacc@unir.br"
                className="text-primary hover:underline"
              >
                dacc@unir.br
              </a>
              .
            </p>
          </section>

          {/* 2 */}
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">
              2. Dados Pessoais Coletados
            </h2>
            <p>Coletamos apenas os dados estritamente necessários:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>CPF</strong> — utilizado como identificador único de
                cadastro, garantindo que cada pessoa tenha uma única conta.
              </li>
              <li>
                <strong>Nome completo</strong> — exibido publicamente nas
                publicações e perfil do usuário.
              </li>
              <li>
                <strong>Endereço de e-mail</strong> — usado para autenticação e
                comunicações relacionadas à conta.
              </li>
              <li>
                <strong>Senha</strong> — armazenada de forma criptografada
                (hash); nunca armazenada em texto simples.
              </li>
              <li>
                <strong>Fotos e imagens</strong> — conteúdo enviado
                voluntariamente pelo usuário para publicação no mural.
              </li>
              <li>
                <strong>Dados de uso</strong> — curtidas, comentários e
                interações realizadas na plataforma.
              </li>
              <li>
                <strong>Dados de acesso</strong> — endereço IP e informações do
                navegador, coletados automaticamente para fins de segurança e
                diagnóstico, conforme o{" "}
                <strong>Marco Civil da Internet (Lei nº 12.965/2014)</strong>.
              </li>
            </ul>
          </section>

          {/* 3 */}
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">
              3. Finalidade e Base Legal do Tratamento
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 pr-4 font-semibold">
                      Finalidade
                    </th>
                    <th className="text-left py-2 font-semibold">
                      Base Legal (LGPD)
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="py-2 pr-4">Criação e gestão de conta</td>
                    <td className="py-2">
                      Execução de contrato — Art. 7º, V
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">
                      Autenticação e segurança da plataforma
                    </td>
                    <td className="py-2">
                      Legítimo interesse — Art. 7º, IX
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">
                      Exibição de conteúdo publicado
                    </td>
                    <td className="py-2">
                      Consentimento — Art. 7º, I
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">
                      Registro de logs de acesso (obrigatório por lei)
                    </td>
                    <td className="py-2">
                      Cumprimento de obrigação legal — Art. 7º, II
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">
                      Melhoria do serviço e diagnóstico
                    </td>
                    <td className="py-2">
                      Legítimo interesse — Art. 7º, IX
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 4 */}
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">
              4. Armazenamento e Proteção dos Dados
            </h2>
            <p>
              Os dados são armazenados em servidores seguros. Adotamos medidas
              técnicas e organizacionais para proteger suas informações contra
              acesso não autorizado, perda, alteração ou divulgação indevida,
              incluindo criptografia de senhas, controle de acesso e
              monitoramento de segurança.
            </p>
            <p>
              Os registros de acesso (logs) são mantidos pelo prazo mínimo de{" "}
              <strong>6 (seis) meses</strong>, conforme exigido pelo art. 15 da
              Lei nº 12.965/2014 (Marco Civil da Internet).
            </p>
            <p>
              Os demais dados pessoais são retidos enquanto a conta estiver
              ativa ou pelo prazo necessário para cumprir obrigações legais.
            </p>
          </section>

          {/* 5 */}
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">
              5. Compartilhamento de Dados
            </h2>
            <p>
              Não vendemos nem cedemos seus dados pessoais a terceiros para fins
              comerciais. Os dados poderão ser compartilhados somente:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                Com provedores de infraestrutura técnica (ex.: serviços de
                hospedagem), estritamente para operação da plataforma;
              </li>
              <li>
                Mediante ordem judicial, requisição de autoridade competente ou
                obrigação legal.
              </li>
            </ul>
          </section>

          {/* 6 */}
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">
              6. Seus Direitos como Titular (LGPD — Art. 18)
            </h2>
            <p>
              Você tem os seguintes direitos em relação aos seus dados pessoais:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>
                <strong>Acesso:</strong> confirmar a existência de tratamento e
                acessar seus dados;
              </li>
              <li>
                <strong>Correção:</strong> corrigir dados incompletos, inexatos
                ou desatualizados;
              </li>
              <li>
                <strong>Anonimização, bloqueio ou eliminação:</strong> de dados
                desnecessários ou tratados em desconformidade com a LGPD;
              </li>
              <li>
                <strong>Portabilidade:</strong> solicitar a transferência dos
                seus dados a outro fornecedor;
              </li>
              <li>
                <strong>Eliminação:</strong> excluir dados tratados com base em
                consentimento;
              </li>
              <li>
                <strong>Revogação do consentimento:</strong> retirar o
                consentimento a qualquer momento;
              </li>
              <li>
                <strong>Oposição:</strong> opor-se ao tratamento realizado com
                fundamento em outras hipóteses legais.
              </li>
            </ul>
            <p>
              Para exercer seus direitos, entre em contato pelo e-mail:{" "}
              <a
                href="mailto:dacc@unir.br"
                className="text-primary hover:underline"
              >
                dacc@unir.br
              </a>
              . Responderemos em até <strong>15 dias úteis</strong>, conforme
              previsto na LGPD.
            </p>
          </section>

          {/* 7 */}
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">7. Cookies</h2>
            <p>
              Utilizamos cookies de sessão estritamente necessários para manter
              o usuário autenticado durante a navegação. Não utilizamos cookies
              de rastreamento ou publicidade.
            </p>
          </section>

          {/* 8 */}
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">
              8. Alterações nesta Política
            </h2>
            <p>
              Podemos atualizar esta Política periodicamente. Em caso de
              alterações relevantes, notificaremos os usuários pelo e-mail
              cadastrado ou por aviso destacado na plataforma. O uso continuado
              do serviço após a notificação implica concordância com a nova
              versão.
            </p>
          </section>

          {/* 9 */}
          <section className="space-y-2">
            <h2 className="text-xl font-semibold">
              9. Autoridade Nacional de Proteção de Dados (ANPD)
            </h2>
            <p>
              Caso considere que seus direitos não foram atendidos, você pode
              apresentar reclamação à{" "}
              <strong>
                Autoridade Nacional de Proteção de Dados (ANPD)
              </strong>
              , por meio do portal{" "}
              <a
                href="https://www.gov.br/anpd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                gov.br/anpd
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-10 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>
            Leia também os nossos{" "}
            <Link href="/termos-de-uso" className="text-primary hover:underline">
              Termos de Uso
            </Link>
            .
          </p>
        </div>
      </main>
    </>
  );
}
