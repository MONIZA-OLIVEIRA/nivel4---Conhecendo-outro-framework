import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class ControleLivrosService {
  private livros: Array<Livro> = [
    { codigo: 1, codEditora: 1, titulo: 'Livro A', resumo: 'Resumo do Livro A', autores: ['Autor A1', 'Autor A2'] },
    { codigo: 2, codEditora: 2, titulo: 'Livro B', resumo: 'Resumo do Livro B', autores: ['Autor B1'] },
    { codigo: 3, codEditora: 3, titulo: 'Livro C', resumo: 'Resumo do Livro C', autores: ['Autor C1', 'Autor C2'] },
    { codigo: 3, codEditora: 3, titulo: 'Livro D', resumo: 'Resumo do Livro D', autores: ['Autor D1', 'Autor D2', 'Autor D3'] }

  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const novoCodigo = Math.max(...this.livros.map(l => l.codigo)) + 1;
    livro.codigo = novoCodigo;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const indice = this.livros.findIndex(livro => livro.codigo === codigo);
    if (indice !== -1) {
      this.livros.splice(indice, 1);
    }
  }
}
