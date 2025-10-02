import {describe, it, expect} from 'vitest'

import ACTC from '../../src/service/ACTCservice'

describe('US2 - ACTCservice - getPilotoByCategory function', () => {
    it('obetener una lista de pilotos segun la categoria', () => {
        const svc = new ACTC()
        const piloto1 = svc.addPiloto('Mariano Werner', 'Toyota', 'TCPK')
        const piloto2 = svc.addPiloto('Gaston Mazzacane', 'Toyota', 'TCPK')
        const piloto3 = svc.addPiloto('German Todino', 'Ford', 'TCPK')
        const piloto4 = svc.addPiloto('Agustin Canapino', 'Renault', 'TC2000')
        const piloto5 = svc.addPiloto('Nicolas Trosset', 'Citroen', 'TC2000')
        const piloto6 = svc.addPiloto('Matias Rossi', 'Toyota', 'TC2000')

        const listaPiloto = svc.getPilotoByCategory('TCPK')

        expect(listaPiloto.length).toBe(3)
        expect(listaPiloto[0].categoria).toBe('TCPK')

    })
})