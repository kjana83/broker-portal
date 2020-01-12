import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { GuidedTourService, GuidedTour } from 'ngx-guided-tour';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
  stats: any[] = [];
  nbChart: any;
  pendingChart: any;
  commissionChart: any;
  bmsUploadChart: any;
  showActivity: boolean;
  sanctionChart: any;
  dashboardTour: GuidedTour;
  toggleActivity() {
    this.showActivity = !this.showActivity;
  }
  navigateToError() {
    this.router.navigate(['/bms/bms-error']);
  }
  startTour() {
    this.guidedTourService.startTour(this.dashboardTour);
  }
  constructor(private router: Router,
    private guidedTourService: GuidedTourService) {
    
    this.stats = [
      { type: 'Clients', count: 2 },
      { type: 'Policies', count: 7 },
      { type: 'Sales', count: 2 },
      { type: 'Conversion', count: 1 },
      { type: 'Renewal', count: 2 },
    ];
    this.sanctionChart = {
      chart: {
        height: 350,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          offsetY: -10,
          startAngle: 0,
          endAngle: 270,
          hollow: {
            margin: 5,
            size: '30%',
            background: 'transparent',
            image: undefined,
          },
          dataLabels: {
            name: {
              show: false,

            },
            value: {
              show: false,
            }
          }
        }
      },
      colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
      series: [76, 67, 61, 90],
      labels: ['New broker request completed', 'New broker request pending', 'Change broker access completed', 'Change broker access pending'],
      legend: {
        show: true,
        floating: true,
        fontSize: '16px',
        position: 'left',
        offsetX: 160,
        offsetY: 10,
        labels: {
          useSeriesColors: true,
        },
        markers: {
          size: 0
        },
        formatter: function (seriesName, opts) {
          return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
        },
        itemMargin: {
          horizontal: 1,
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            show: false
          }
        }
      }]
    };
    this.bmsUploadChart = {
      chart: {
        height: 350,
        type: 'bar',
        stacked: true,
        stackType: '100%'
      },
      plotOptions: {
        bar: {
          horizontal: true,
        },

      },
      stroke: {
        width: 1,
        colors: ['#fff']
      },
      series: [{
        name: 'Successful',
        data: [44, 55, 41, 37, 22, 43, 21]
      }, {
        name: 'WIP',
        data: [53, 32, 33, 52, 13, 43, 32]
      }, {
        name: 'Pending Approval',
        data: [12, 17, 11, 9, 15, 11, 20]
      }
        , {
        name: 'Failure',
        data: [8, 7, 8, 9, 6, 7, 7]
      }],
      title: {
        text: ''
      },
      xaxis: {
        categories: ['Toronto', 'Markham', 'North York', 'Mississauga', 'Brampton', 'Eglinton', 'Vaughan'],
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return val
          }
        }
      },
      fill: {
        opacity: 1

      },

      legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40
      }
    };
    this.commissionChart = {
      chart: {
        type: "donut",
        height: 290,
      },
      labels: ["Alberta", "Manitoba", "Newfoundland", "Ontario", "Quebec"],
      series: [44, 17, 41, 55, 15],
      responsive: [
        {
          breakpoint: 300,
          options: {

            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };
    this.pendingChart = {
      chart: {
        height: 280,
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              fontSize: '22px',
            },
            value: {
              fontSize: '16px',
            },
            total: {
              show: true,
              label: 'Total',
              formatter: function (w) {
                // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                return 9
              }
            }
          }
        }
      },
      series: [22, 10, 25, 20, 20],
      labels: ['Policy Inquiry', 'Renewal Rewrite', 'Renewal Pending', 'Policy upgrade request', 'Policy Suspended'],
    };
    this.nbChart = {
      chart: {
        height: 250,
        type: "bar"
      },
      plotOptions: {
        bar: {
          horizontal: true,
          dataLabels: {
            position: "top"
          }
        }
      },
      dataLabels: {
        enabled: true,
        offsetX: -6,
        style: {
          fontSize: "12px",
          colors: ["#fff"]
        }
      },
      stroke: {
        show: true,
        width: 1,
        colors: ["#fff"]
      },
      series: [
        {
          name: "Property",
          data: [44, 55, 41, 20, 22]
        },
        {
          name: "Auto",
          data: [53, 32, 33, 52, 13]
        }
      ],
      xaxis: {
        categories: [
          "Alberta",
          "Manitoba",
          "Newfoundland",
          "Ontario",
          "Quebec"
        ]
      }
    };
  }
}
