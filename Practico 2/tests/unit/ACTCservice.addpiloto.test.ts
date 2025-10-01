import {describe, it, expect} from 'vitest'

import ACTC from '../../src/service/ACTCservice'

describe('US3 - ACTCservice - addpiloto function', () => {
    it('agregar un piloto', () => {
        const svc = new ACTC()
        const piloto1 = svc.addPiloto('Julian', 'Ford', 'TC')
        expect(piloto1).toBeDefined()
        expect(svc.getSize()).toBe(1)
    })
})