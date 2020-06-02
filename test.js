describe('click issue repro example', () => {
    it('should load correctly', () => {
        browser.url('http://localhost:4569/html/test.html')
        $('/html/body/a').click();
        expect('#verify').toHaveText('ok');
    })
})