//////////////////////// Função Para Animations and Transitions AOS - [ https://unpkg.com/ ] //////////////////


// LEGENDA: [LOG OU ERRO] - [[NOME DA FUNÇÃO OU STATUS]] => (NOME DO PACKAGE OU API)


async function loaderAOS() {
    const urlAOS = "https://unpkg.com/aos@next/dist/aos.js";
    console.log(`[LOG] - [[URL]]  => (AOS) => Carregando... `);

    try {
        const script = document.createElement("script");
        script.src = urlAOS;
        script.async = true; // Permite o carregamento em paralelo

   
        
        await new Promise((resolve, reject) => {
            
            
            script.onload = () => {
                console.log("[LOG] - [[PROMISE]] => (AOS) carregado com sucesso.");
                resolve(); 
            };

           
            script.onerror = (error) => {
             
                reject(new Error(` [ERRO] [[PROMISE]]  => (AOS) Falha ao carregar o script da URL.`));
            };
            
          
            document.body.appendChild(script);
        });
        

        if (typeof AOS !== 'undefined' && typeof AOS.init === 'function') {
            console.log('[LOG] - [[CONFIG]] => (AOS) Inicializando...');
            AOS.init({
                disable: 'mobile', /* ['phone', 'tablet', 'mobile', boolean] [false desativado]*/
                mirror: false, // Define se os elementos devem animar de volta quando você rolar para cima. - [true ou false]
                duration: 1200, // Duração da animação em milissegundos (ms).
                disableMutationObserver: false, // Desativa a detecção automática de alterações no DOM (avançado).
                delay: 0, // Atraso da animação em milissegundos (ms).
                once: true,  /* Define se a animação deve ser disparada apenas uma vez (ao rolar para baixo)... 
                ou toda vez que o elemento entra e sai da visualização. - [true ou false] */ 
                // easing: 'ease', // [ 'ease-in-out' ou 'ease' ] - Escolhe a função de temporização (easing) para as animações.
            });
            console.log('[LOG] - [[CONFIG]] => (AOS) inicializado com sucesso, verificando o HTML.');
        } else {
            // Esta exceção deve ser tratada pelo bloco catch
            throw new Error(" [ERRO] - [[CONFIG]] => (AOS) A biblioteca AOS foi carregada, mas o objeto 'AOS' não foi encontrado ou 'AOS.init' não é uma função.");
        }

    } catch(error) {
       
        console.error('[ERRO] => (AOS) Ocorreu um erro durante o carregamento ou inicialização do AOS:', error.message);
        console.error(error);
    }
    console.log("[LOG] - [[SUCESS]] => (AOS) API carregada com sucesso.");
}


document.addEventListener('DOMContentLoaded', loaderAOS);
