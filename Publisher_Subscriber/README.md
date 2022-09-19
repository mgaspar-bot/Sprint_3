Per provar el codi:
    <ol>
<li>Cal tenir instal·lat RabbitMQ i activar el servei</li>
<li>'npm install' al directori on hagis copiat aquest repositori</li>
<li>Executa 'node consumer.js'. El procés es queda obert escoltant a la cua "chatRoom2"</li>
<li>Executa en una altra terminal 'node publisher.js', enviarà missatges a la cua chatRoom2 que seràn rebuts pel procés consumer.js</li>
    </ol>
Si s'obren altres processos consumer, els missatges que enviïs seràn rebuts pels processos alternativament, repartint la càrrega de feina