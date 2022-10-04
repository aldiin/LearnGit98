describe('Create New User', () => {
    it('Succesfully create new user', () => {
        var user = {
            "nama": "Eduwork",
            "job":"Education"
        }        

        cy.request('POST','https://reqres.in/api/users', user).then((response) => { 
            expect(response.status).equal(201)
            expect(response.body.nama).to.equal(user.nama)
            expect(response.body.job).to.equal(user.job)
        })
    });
})