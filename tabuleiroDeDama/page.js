import Estilo from './css/style.module.css'
import Tabuleiro from "@/app/tabuleiroDeDama/components/Tabuleiro";

export default function TabuleiroPage() {
    return (
        <main className={Estilo.page}>
            <h1 className={Estilo.h1}>Tabuleiro de Dama</h1>
            <div className={Estilo.page}>
                <Tabuleiro />
            </div>
        </main>
    )
}