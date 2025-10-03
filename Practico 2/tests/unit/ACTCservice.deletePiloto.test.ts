import {describe, it, expect} from 'vitest'

import ACTC from '../../src/service/ACTCservice'

describe('US4 - ACTCservice - deletePiloto function', () => {
    it('Eliminar un piloto por el id', () => {
        const svc = new ACTC()
        const piloto1 = svc.addPiloto('German Todino', 'Ford', 'TCPK')
        const piloto2 = svc.addPiloto('Agustin Canapino', 'Renault', 'TC2000')
        const piloto3 = svc.addPiloto('Nicolas Trosset', 'Citroen', 'TC2000')

        const valor = svc.deletePiloto(1)

        expect(valor).toBe(true)
        expect(svc.getSize()).toBe(2)
        expect(svc.getPilotoById(1)).toBeUndefined()
    })
})