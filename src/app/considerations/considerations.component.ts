import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-considerations',
  templateUrl: './considerations.component.html',
  styleUrls: ['./considerations.component.css']
})
export class ConsiderationsComponent implements OnInit {

  language = 'pt';

  considerations = {
    portuguese: [{
      title: 'Paginação',
      content: 'Uma vez que a API retorna todas as requisições e sem filtro, não seria bom controlá-la a partir do front end. Mas eu tivesse que implementar a API, a paginação seria uma boa alternativa para evitar centenas, talvez milhares de dados sendo transportados.'
    }, {
      title: 'Filtros na lista de consultas',
      content: 'Como a API só retorna dados do meu login, então não seria recompensador fazer inúmeros filtros. Portanto, eu fiz um filtro de placas apenas.'
    }, {
      title: 'Gráficos',
      content: 'Assim como os filtros na lista de consultas, gráficos também seriam muito legais de serem colocados na aplicação para mostrar as placas mais consultadas ou as mais recentes, etc.'
    }],
    english: [{
      title: 'Pagination',
      content: 'Since the API returns every request made with no filters, it wouldn\'t be a good practice to control all data in front end. But if I had to implement the API, pagination would be a good thing to do to avoid hundreds, maybe thousands of data being transported by.'
    }, {
      title: 'Filters in List of Requests Page',
      content: 'Since the API only returns data from my login, I figured it wouldn\'t be rewarding to create many filters. Therefore, I created only car plates filter.'
    }, {
      title: 'Charts',
      content: 'Again, just like filters mentioned above, charts would be a very cool option to show most requested car plates, most recent ones that were searched, etc.'
    }]
  };

  constructor() { }

  ngOnInit(): void {
  }

  getConsiderations() {
    return this.language === 'pt' ? this.considerations.portuguese : this.considerations.english;
  }

}
