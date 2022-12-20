
export const register = async () => {
    if('serviceWorker' in navigator) {
        try {
            const registration = await  navigator.serviceWorker.register(
                './sw.js',
                {scope: '/'}
            )
            console.log('\n -- Cimber logger: Registration SWAddblocker complited succesfully! --')
        } catch(e) {
            console.log(e)
        } 
    }
}

export const get = async() => {
    const test = await navigator.serviceWorker.getRegistrations()
    console.log(test)
}