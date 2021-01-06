const {convertToUpperCamelCase} = require('./helper')

test('convertToUpperCamelCase', () => {
  const testCases = [
    ['test-abc', 'Test Abc'],
    ['planner', 'Planner'],
    ['community_infra', 'Community Infra'],
    [null, ''],
    [undefined, ''],
    [true, 'true'],
    [false, 'false'],
    [123, '123'],
  ].forEach(testCase => {
    expect(convertToUpperCamelCase(testCase[0])).toEqual(testCase[1]);
  })
})
