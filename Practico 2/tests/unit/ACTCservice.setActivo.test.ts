import {describe, it, expect} from 'vitest'

import ACTC from '../../src/service/ACTCservice'

describe('US4 - ACTCservice - setActivo function', () => {
    it('modificar estado del piloto', () => {
        const svc = new ACTC()
        const piloto1 = svc.addPiloto('Julian', 'Ford', 'TC') //crea el piloto con estado activo=true
        const succes = svc.setActivo(1, false)
        expect(succes).toBe(true)
        expect(svc.getPilotoById(1)?.activo).toBe(false)
    })
})