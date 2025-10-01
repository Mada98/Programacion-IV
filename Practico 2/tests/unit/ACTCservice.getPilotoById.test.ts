import {describe, it, expect} from 'vitest'

import ACTC from '../../src/service/ACTCservice'

describe('US1 - ACTCservice - getPilotoById function', () => {
    it('obtener un piloto existente', () => {
        const svc = new ACTC()
        const piloto1 = svc.addPiloto('Mariano Werner', 'Ford', 'TCPK')
        const piloto2 = svc.addPiloto('Agustin Canapino', 'Chevrolet', 'TC2000')
        expect(svc.getPilotoById(1)?.nombre).toBe('Mariano Werner')
        expect(svc.getPilotoById(2)?.marca).toBe('Chevrolet')
    })
})