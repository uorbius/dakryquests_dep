
export const register = async () => {
    if('serviceWorker' in navigator) {
        try {
            const registration = await  navigator.serviceWorker.register(
                'sw.ts',
                {scope: '/'}
            )
            console.log('registration service worker completed successfully')
        } catch(e) {
            console.log(e)
        } 
    }
}