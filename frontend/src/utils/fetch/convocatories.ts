import { BASE } from '../base';
import { ROUTE } from '../routes';

export default class ConvocatoriesFetch {
    async getAllConvocatories (page: number, size: number) {
        const URL = `${BASE.API}${ROUTE.convocatories.fetchListOfConvocatories(page,size)}`;
        return await fetch(URL, {
            method: 'GET',
            mode: 'cors',
        })
        .then((response) => {
            if (response.status === 201 || response.status === 200) {
                console.log(response.json);
                return response;
            } else {
                console.log(response.status);
                return response.status;
            }
        });
    }
}