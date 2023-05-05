import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-text-coloring',
  templateUrl: './text-coloring.component.html',
  styleUrls: ['./text-coloring.component.css']
})
export class TextColoringComponent {
    @Input() text = '';
    textsWithColor:{value:string, color:string}[] = []
    
    getTextColor () {
        const elements = this.text.split(' ')
        for (let i = 0; i < elements.length; i++) {
            
            let color = 'black'
            if (['BKN', 'FEW', 'SCT'].includes(elements[i].substring(0, 3).toUpperCase())) {
                const elemNum = parseInt(elements[i].replace(/\D/g,''))
                
                if (elemNum <= 30) {
                    color = 'red'
                } else if (elemNum > 30) {
                    color = 'blue'
                }
            }
            
            this.textsWithColor.push({value: elements[i], color})
            
        }
        return this.textsWithColor
    }
    
    ngOnChanges(changes: SimpleChanges) {
        this.getTextColor ()
    }
}