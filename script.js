document.addEventListener('DOMContentLoaded', function () {
    const juegos = [
        { 
            titulo: 'Doom',
            resena: 'Como fiel seguidor de la franquicia y jugador de la vieja escuela, no sentí el mismo entusiasmo que otras personas cuando Bethesda mostró los primeros avances de DOOM. En la historia de la industria, han existidos muchos intentos de reintegrar viejos clásicos a la moderna tendencia de diseño con resultados atroces, así que el miedo principal que sentía con el nuevo DOOM era que la esencia que definió la entrega de los 90 se perdiera por completo.',
            calificacion: 10,
            imagen: 'https://i.blogs.es/983481/doom_alt_boxart.0.0/1366_2000.jpg'
        },
        { 
            titulo: 'League of legends',
            resena: 'Llevo años jugando MOBAS, empecé con el mapa de DOTA por los 2000s y luego empecé a jugar LOL mas o menos por 2012, a los inicios de la comunidad de LOL y el auge del MOBA. Para los nuevos les puedo decir que de esa epoca hasta hoy 2021, el juego y su comunidad han evolucionado sorprendentemente tanto para bien como para mal.',
            calificacion: 4,
            imagen: 'https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-80471666c140f790f28dff68d72c384b'
        },
        { 
            titulo: 'Valorant',
            resena: 'Valorant es un juego gratuito para PC desarrollado por Riot Games. Se trata de un shooter en primera persona fiel al espíritu de la compañía. Esto se traduce en un alma competitiva pura enfocada únicamente al modo multijugador.',
            calificacion: 5,
            imagen: 'https://i.blogs.es/3f15c2/valorant/1366_2000.jpg'
        },
        { 
            titulo: 'Apex Legends',
            resena: 'Apex Legends es un gran contendiente en la batalla de los Battle Royale tomando lo mejor del género y sumando elementos que dan una gran frescura. Las leyendas y el sistema de marcación son sin duda añadidos importantes que hacen a Apex resaltar del resto con un gran mapa y unos gráficos de primera y todo ello alcance de todos al ser free-to-play.',
            calificacion: 3,
            imagen: 'https://sm.ign.com/ign_latam/cover/a/apex-legen/apex-legends_cgav.jpg'
        },
        { 
            titulo: 'Dead by Daylight',
            resena: 'La verdad es que un concepto como este es ideal para un survival horror, pero antes que el juego de Viernes 13, había llegado a los PCs un título de idéntica mecánica llamado Dead by Daylight. Lo que analizamos ahora es la versión de ese juego que acaba de llegar a PS4 y Xbox One.',
            calificacion: 10,
            imagen: 'https://fs-prod-cdn.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_DeadByDaylight_image1280w.jpg'
        },
        { 
            titulo: 'Warframe',
            resena: 'El juego me parece espectacular, te atrae desde el comienzo con sus gráficos, jugabilidad e historia. Una de las mejores sensaciones es empezar y no tener idea de que hacer, y que conforme pasa el tiempo vas mejorando. Me encanta el sistema de misiones y los 3 mundos abiertos que hay a la fecha, los modos PvE y PvP son espectaculares aunque el modo PvP está un poquito muerto, sin embargo quiero resaltar algo, hay muchos bugs que me han tocado, son del tipo que aveces empiezas a volar o caes al vacío pero exceptuando ese punto no tengo ninguna otra queja. ',
            calificacion: 10,
            imagen: 'https://image.api.playstation.com/vulcan/ap/rnd/202312/1318/6ba66fae67f0a1c484a2311a95f323d496751907e6fc4ce0.png'
        },
    ];

    const gameList = document.getElementById('gameList');

    juegos.forEach(juego => {
        const gameCard = document.createElement('div');
        gameCard.classList.add('gameCard');

        const gameCardInner = document.createElement('div');
        gameCardInner.classList.add('gameCardInner');

        const front = document.createElement('div');
        front.classList.add('front');
        front.innerHTML = `
            <img src="${juego.imagen}" alt="${juego.titulo}" class="gameImage">
            <h2 class = "Juego_Front">${juego.titulo}</h2>
        `;

        const back = document.createElement('div');
        back.classList.add('back');
        back.innerHTML = `
            <h2>${juego.titulo}</h2>
            <p>${juego.resena}</p>
            <p>Calificacion: ${juego.calificacion}</p>
        `;

        gameCardInner.appendChild(front);
        gameCardInner.appendChild(back);
        gameCard.appendChild(gameCardInner);

        gameList.appendChild(gameCard);
    });
});
