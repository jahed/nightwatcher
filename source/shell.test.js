import test from 'ava'
import { createCommandString } from './shell'

test('should create a command string of args', t => {
    const result = createCommandString('somecommand', {
        'arg-1': 'value1',
        'arg-2': undefined,
        'arg-3': 'value3'
    })

    t.is(result, 'somecommand --arg-1 "value1" --arg-2 --arg-3 "value3"')
})