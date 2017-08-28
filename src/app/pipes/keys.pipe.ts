import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys',
  pure: false  //este pipe tiene que estar pendiente al ciclo de cambio que haga angular(Para el caso de eliminacion)
})
export class KeysPipe implements PipeTransform {

  transform(value: any): any {
    let keys = [];
 			for (let key in value) {
				keys.push(key)			  			 	
			}

    return keys;
  }

}
