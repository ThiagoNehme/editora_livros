import { Livro } from "../Modelo/Livro";

export class ControleLivro {
  private livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: "Livro A",
      resumo: "Resumo do livro A",
      autores: ["Autor 1", "Autor 2"]
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: "Livro B",
      resumo: "Resumo do livro B",
      autores: ["Autor 3"]
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: "Livro C",
      resumo: "Resumo do livro C",
      autores: ["Autor 4", "Autor 5"]
    }
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = this.livros.length > 0 ? Math.max(...this.livros.map(l => l.codigo)) + 1 : 1;
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = this.livros.findIndex(livro => livro.codigo === codigo);
    if (index >= 0) {
      this.livros.splice(index, 1);
    }
  }
}
