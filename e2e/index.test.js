import { Selector } from 'testcafe';

fixture`Checking keyboard shortcuts working`
    .page`../build/index.html`

test('should add new event of type pass when w button is pressed', async t => {
    await t
        .pressKey('w')
        .expect(Selector('.MuiCard-root').count).eql(1);
});
