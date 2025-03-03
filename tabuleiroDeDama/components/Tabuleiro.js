import Estilo from '@/app/tabuleiroDeDama/css/style.module.css';

export default function Tabuleiro() {
    const tamanho = 8;

    // Função para renderizar cada casa do tabuleiro
    const renderizar = (linha, coluna) => {
        const verificaCasa = (linha + coluna) % 2 === 1;  // Verifica se a casa é preta ou branca
        let peca = null;

        // Se a casa for preta, aloca as peças
        if (verificaCasa) {
            if (linha < 3) peca = Estilo.player2;  // Peças brancas
            else if (linha > 4) peca = Estilo.player1;  // Peças pretas
        }

        return (
            <div key={`${linha}-${coluna}`} className={`${Estilo.casa} ${verificaCasa ? Estilo.preta : Estilo.branca}`}>
                {peca && <div className={peca}></div>} {/* Coloca a peça se necessário */}
            </div>
        );
    };

    return (
        <div className={Estilo.tabuleiro}>
            {[...Array(tamanho)].map((_, linha) =>
                [...Array(tamanho)].map((_, coluna) =>
                    renderizar(linha, coluna)
                )
            )}
        </div>
    );
}
