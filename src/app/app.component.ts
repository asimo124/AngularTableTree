import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-table-tree';

  dataset = {
      fk_Users_2: [
      {
        labels: [
          'First Name',
          'Last Name'
        ],
        vals: [
          'alex',
          'hawley'
        ],
        oneToManies: [
          {
            fk_Posts_2: [
              {
                labels: [
                  'title',
                  'date'
                ],
                vals: [
                  'Engage2Learn is growing',
                  '07/12/2019'
                ],
                oneToManies: []
              }
            ]
          }
        ]
      },
      {
        labels: [

        ],
        vals: [
          'tom',
          'smith'
        ],
        oneToManies: [
          /*{
            fk_Posts_2: [
              {
                labels: [
                  'title',
                  'date'
                ],
                vals: [
                  'Engage2Learn is growing',
                  '07/12/2019'
                ],
                oneToManies: []
              }
            ]
          }*/
        ]
      }
    ]
  };

  ngOnInit(): void {
    console.log('this.dataset: ', this.dataset);
  }
}
