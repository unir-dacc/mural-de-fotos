{
  description = "NixOS environment";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
  };

  outputs =
    { self, nixpkgs }:
    let
      # Define os sistemas suportados
      supportedSystems = [
        "x86_64-linux"
        "aarch64-linux"
        "x86_64-darwin"
        "aarch64-darwin"
      ];

      # Função auxiliar para gerar os outputs para cada sistema
      forAllSystems = nixpkgs.lib.genAttrs supportedSystems;

      # Instancia o nixpkgs para cada sistema
      pkgsFor = system: nixpkgs.legacyPackages.${system};
    in
    {
      devShells = forAllSystems (system: {
        default =
          with pkgsFor system;
          mkShell {
            packages = [
              nodejs_22
              yarn
              nodePackages.typescript
              nodePackages.typescript-language-server
              openssl
              pkg-config
              pre-commit
            ];

            # Dica: No macOS, algumas ferramentas precisam encontrar o Framework CoreServices
            buildInputs = lib.optionals stdenv.isDarwin [
              darwin.apple_sdk.frameworks.CoreServices
            ];
          };
      });
    };
}
