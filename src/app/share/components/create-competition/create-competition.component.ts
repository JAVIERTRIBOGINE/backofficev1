import { Component, OnInit } from '@angular/core';

export interface Partido {
  local:number,
  visitante: number
}

@Component({
  selector: 'app-create-competition',
  templateUrl: './create-competition.component.html',
  styleUrls: ['./create-competition.component.scss']
})
export class CreateCompetitionComponent implements OnInit {

  equipos= ["Barça","Madrid","Real Sociedad", "Sevilla",
  "Betis", "Atletico de Madrid", "Valencia", "Villareal"
  ]
  numEquipos: number = this.equipos.length;
  local: number = -1
  visitante: number = -1;
  rondas: object[][]; 

  constructor() { }
  ngOnInit() {
  }

  generateCompetition(){
    this.calcularLiga();
    this.calcularLigaNumEquiposPar();
  }


     calcularLigaNumEquiposPar()
    {
      this.rondas = [];
        let numRondas = this.numEquipos - 1;
        let numPartidosPorRonda = this.numEquipos / 2;
        
        
        for ( let i = 0, k = 0; i < numRondas; i ++)
        {
          
          this.rondas[i]=[];
            for (let j = 0; j < numPartidosPorRonda; j ++)
            {
                this.rondas[i][j] = {};
                  
                
                this.rondas[i][j]['local'] = k;

                k ++;

                if (k == numRondas)
                    k = 0;
            }
        }
        
        for (let i = 0; i < numRondas; i ++)
        {
            if (i % 2 == 0)
            {
                this.rondas[i][0]['visitante'] = this.numEquipos - 1;
            }
            else
            {
                this.rondas[i][0]['visitante'] = this.rondas[i][0]['local'];
                this.rondas[i][0]['local'] = this.numEquipos - 1;
            }
        }
        
        let equipoMasAlto = this.numEquipos - 1;
        let equipoImparMasAlto = equipoMasAlto - 1; 
        
        for (let i = 0, k = equipoImparMasAlto; i < numRondas; i ++)
        {
            for (let j = 1; j < numPartidosPorRonda; j ++)
            {
                this.rondas[i][j]['visitante'] = k;

                k --;

                if (k == -1)
                    k = equipoImparMasAlto;
            }
        }
        this.mostrarPartidos();
        // return this.rondas;
    }

    calcularLigaNumEquiposImpar()
    {
        let numRondas = this.numEquipos;
        let numPartidosPorRonda = this.numEquipos / 2;
                
        for (let i = 0, k = 0; i < numRondas; i ++)
        {
          this.rondas[i] = [];
            for (let j = -1; j < numPartidosPorRonda; j ++)
            {
                if (j >= 0)
                {
                    this.rondas[i][j] = {};
                    
                    this.rondas[i][j]['local'] = k;
                }
                
                k ++;

                if (k == numRondas)
                    k = 0;
            }
        }
        
        let equipoMasAlto = this.numEquipos - 1;
        
        for (let i = 0, k = equipoMasAlto; i < numRondas; i ++)
        {
            for (let j = 0; j < numPartidosPorRonda; j ++)
            {
                this.rondas[i][j]['visitante'] = k;

                k --;

                if (k == -1)
                    k = equipoMasAlto;
            }
        }
        
        this.mostrarPartidos();
    }
    
    calcularLiga()
    {
        if (this.numEquipos % 2 == 0)
             this.calcularLigaNumEquiposPar();
        else
             this.calcularLigaNumEquiposImpar();
    }
    



  mostrarPartidos()
  {
    
    for (let i = 0; i < this.rondas.length; i ++)
    {
        console.log("ronda:", i);
          // System.out.print("Ronda " + (i + 1) + ": ");
          
          for (let j = 0; j < this.rondas[i].length; j ++)
          {
            console.log("Partido: " + this.equipos[this.rondas[i][j]['local']] + " - " + this.equipos[this.rondas[i][j]['visitante']]);
            
              // System.out.print("   " + (1 + rondas[i][j].local) + "-" + (1 + rondas[i][j].visitante));
          }
          
      }
      
      // System.out.println("VUELTA");
      
      for (let i = 0; i < this.rondas.length; i ++)
      {
          // System.out.print("Ronda " + (i + 1) + ": ");
          
          for (let j = 0; j < this.rondas[i].length; j ++)
          {
              // System.out.print("   " + (1 + rondas[i][j].visitante) + "-" + (1 + rondas[i][j].local));
          }          
      }
  }

}
