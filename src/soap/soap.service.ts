import { Injectable } from '@nestjs/common';
import * as strong from 'strong-soap'
const soap = strong.soap


@Injectable()
export class SoapService {

    consume = (url, options, requestArgs, service, endpoint, methode) => {

        soap.createClient(url, options, (err, client) => {
            if (!err) {
                var method = client[service][endpoint][methode];

                method(requestArgs, (error, result, envelope, soapHeader) => {
                    if (!err) {
                        console.log('Result: \n' + JSON.stringify(result));
                        return result;
                    } else {
                        console.log(error)
                        return error
                    }
                });
            } else {
                console.log('Error: \n' + err)
                return err
            }
        })
    }

    async consumeApi() {
        var url = 'https://graphical.weather.gov/xml/SOAP_server/ndfdXMLserver.php?wsdl';
        var requestArgs = {};
        var options = {};
        var service = ''
        var endpoint = ''
        var method = ''
        this.consume(url, options, requestArgs, service, endpoint, method);
    }
}
