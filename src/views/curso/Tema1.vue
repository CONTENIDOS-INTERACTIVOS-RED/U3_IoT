<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Desarrollo de aplicaciones y análisis de datos en IOT'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    // Bloque 1/31: p
    .row.justify-content-center.mb-4
      .col-12
        p(data-aos="fade-left") El desarrollo de aplicaciones y el análisis de datos constituyen el núcleo operativo de los sistemas IoT modernos, donde se transforma la información cruda en conocimiento valioso para la toma de decisiones empresariales y operativas. Esta unidad proporciona los conocimientos fundamentales para construir soluciones IoT completas, desde la elección adecuada del hardware hasta la implementación de sistemas de visualización avanzados capaces de interpretar grandes volúmenes de información. El dominio de estas competencias es esencial para cualquier ingeniero de software que desee desarrollar aplicaciones robustas en el ecosistema del Internet of Things, considerando que la industria demanda profesionales capaces de integrar múltiples tecnologías de forma eficiente y escalable.

    // Bloque 2/31: imagen-iconobloque-texto
    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Uno de los desafíos más relevantes en el desarrollo de aplicaciones IoT contemporáneas es la integración efectiva entre componentes de hardware y software. Esto requiere un enfoque multidisciplinario que combine programación, electrónica básica y análisis avanzado de datos. Las plataformas de desarrollo modernas han facilitado esta integración, ofreciendo herramientas especializadas que permiten crear prototipos funcionales de manera ágil y escalar hacia soluciones empresariales robustas. Comprender integralmente estos procesos tecnológicos es vital, dado que los sistemas IoT deben operar de forma confiable en entornos diversos y cambiantes, cumpliendo con altos estándares de calidad y normativas internacionales de seguridad.
        p(data-aos="fade-left") Además, el procesamiento inteligente y el análisis sofisticado de los datos generados por dispositivos IoT abren oportunidades significativas para generar valor agregado mediante el uso de técnicas de inteligencia artificial y algoritmos de aprendizaje automático. Se abordan métodos avanzados de visualización que convierten datos complejos en información comprensible y útil para los usuarios finales, permitiendo decisiones estratégicas fundamentadas en evidencia cuantitativa. Esta capacidad para transformar datos brutos en insights valiosos marca la diferencia entre un sistema básico de recolección y una solución verdaderamente inteligente que se adapta dinámicamente, aprende de patrones históricos y mejora continuamente su desempeño.

    // Bloque 3/31: titulo-segundo
    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Herramientas para desarrollo IoT (Arduino, Raspberry Pi)

    // Bloque 4/31: texto-color-imagen
    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-4 El desarrollo eficiente de aplicaciones IoT exige el dominio de plataformas de hardware especializadas que faciliten tanto la creación rápida de prototipos como la implementación de soluciones escalables en entornos de producción. Estas herramientas constituyen la base tecnológica sobre la cual se construyen sistemas funcionales, eficientes y mantenibles. La elección adecuada de la plataforma es crucial y debe estar alineada con los requisitos específicos de cada proyecto.
        .bg-color-2.p-4(data-aos="fade-left").mb-4
          p.mb-0 Durante la última década, las plataformas de desarrollo IoT han evolucionado significativamente, conformando ecosistemas completos e integrados que combinan hardware optimizado, software especializado y servicios en la nube. Esta evolución ha democratizado el acceso al desarrollo IoT, permitiendo que ingenieros de software sin experiencia previa en electrónica desarrollen soluciones innovadoras.
        p(data-aos="fade-left") Además, estas plataformas modernas permiten concentrarse en la lógica del negocio sin ocuparse en exceso de los detalles técnicos de bajo nivel, lo que acelera el proceso de desarrollo y reduce la complejidad técnica de los proyectos multidisciplinarios. Esta capacidad de abstracción resulta especialmente valiosa cuando se enfrentan limitaciones de tiempo y presupuesto. A continuación, se presentan los subtemas fundamentales:
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")

    // Bloque 5/31: infografia
    .bg-full-width.bg-color-18.mb-0
      .px-4.px-md-5.pt-4
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/infografia1.svg', alt='', style="max-width: 1106px;").mx-auto
              .bg-color-white.box-shadow.p-3(x="22%" y="35%" numero="+")
                h5 Arduino
                p Plataforma de código abierto basada en microcontroladores, ideal para proyectos de bajo consumo y prototipos rápidos, con una amplia comunidad y bibliotecas disponibles.
              .bg-color-white.box-shadow.p-3(x="80%" y="15%" numero="+")
                h5 Raspberry Pi
                p Ordenador de placa reducida con sistema operativo completo, adecuado para proyectos más complejos que requieren procesamiento intensivo y conectividad avanzada.
              .bg-color-white.box-shadow.p-3(x="22%" y="70%" numero="+")
                h5 Servicios en la nube para IoT
                p Herramientas como AWS IoT, Azure IoT Hub o Google Cloud IoT permiten gestionar dispositivos, almacenar datos y aplicar machine learning en la nube.
              .bg-color-white.box-shadow.p-3(x="92%" y="55%" numero="+")
                h5 Integración hardware-software
                p Estrategias para asegurar una comunicación robusta entre sensores, actuadores, microcontroladores y aplicaciones.
              .bg-color-white.box-shadow.p-3(x="93%" y="37%" numero="+")
                h5 Herramientas de diseño de prototipos
                p Software como Fritzing, Tinkercad y simuladores que ayudan a visualizar y construir circuitos antes del desarrollo físico.
              .bg-color-white.box-shadow.p-3(x="12%" y="8%" numero="+")
                h5 Plataformas empresariales escalables
                p Soluciones como ThingsBoard, Kaa o Blynk para gestionar dispositivos y datos en implementaciones industriales.

    // Bloque 6/31: bg-full-icono-texto
    .bg-full-width.bg-color-3.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center.text-white
          .col-lg-auto
            img(src="@/assets/curso/tema1/4.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Cada uno de estos elementos contribuye a un ecosistema de desarrollo IoT coherente, que permite abordar proyectos que van desde prototipos académicos hasta aplicaciones industriales a gran escala.

    // Bloque 7/31: párrafo normal
    .row.justify-content-center.mb-4
      .col-12
        h2 Introducción a Arduino y Raspberry Pi

    // Bloque 8/31: imagen-texto-color 4:8
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/4.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-4 Arduino representa una plataforma revolucionaria de desarrollo de hardware abierto que ha transformado la creación de prototipos electrónicos, estableciéndose como un estándar de facto en aplicaciones IoT debido a su simplicidad y versatilidad. Su arquitectura simplificada y su ecosistema de librerías especializadas permiten a los desarrolladores crear soluciones complejas de manera rápida y eficiente, sin requerir conocimientos avanzados de electrónica analógica. Basada en microcontroladores optimizados, Arduino puede interactuar con una amplia gama de sensores, actuadores y módulos de comunicación, proporcionando una base sólida para dispositivos conectados, autónomos e inteligentes que operan de manera confiable en entornos industriales.
        .bg-color-5.p-4(data-aos="fade-left").mb-4
          p.mb-0 La plataforma cuenta con documentación técnica exhaustiva que demuestra cómo facilita significativamente el desarrollo IoT gracias a su entorno de desarrollo integrado (IDE) intuitivo y su alta compatibilidad con sensores y módulos de comunicación estándar (Domínguez Mínguez, 2020). Su soporte para protocolos industriales permite una integración robusta con servicios en la nube y otras plataformas heterogéneas, lo que favorece la creación de ecosistemas interoperables.
        p(data-aos="fade-left") La facilidad de uso, la abundante documentación y una comunidad activa convierten a Arduino en una opción ideal para proyectos que requieren desarrollo rápido, prototipado ágil e iteración frecuente:

    .bg-full-width.bg-color-12
      .p-4.p-md-5
        // Bloque 9/31: tarjetas-boton
        .row.justify-content-center.align-items-stretch.mb-5
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/5.svg" style="width: 90px")
              h5.mb-2.text-center Tipo de plataforma
              p.mb-0.text-center Hardware abierto basado en microcontroladores.
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/5.svg" style="width: 90px")
              h5.mb-2.text-center Fortalezas
              p.mb-0.text-center Simplicidad, versatilidad, comunidad activa, prototipado rápido.
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/5.svg" style="width: 90px")
              h5.mb-2.text-center Compatibilidad
              p.mb-0.text-center Alta compatibilidad con sensores, módulos y protocolos estándar.
          .col-lg-3.mb-4(data-aos="zoom-in-up")
            .bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema1/5.svg" style="width: 90px")
              h5.mb-2.text-center Uso típico
              p.mb-0.text-center Proyectos industriales, académicos y de misión crítica.


        .row.justify-content-center.mb-5
          .col-lg-8
            .bg-color-white.shadow-soft.p-4.mb-4
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/video.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h5.mb-1 RASPBERRY PI
                      p.mb-0 Para ampliar el conocimiento sobre Raspberry y sus características, le invitamos a ver el siguiente vídeo.
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://youtu.be/OzwLGzgFhss" target="_blank")
                        span Ver video
                        i.fas.fa-arrow-right


        .row.align-items-center.mb-5
          .col-lg-auto
            img(src="@/assets/curso/tema1/6.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Un ejemplo práctico representativo en ingeniería de software es el desarrollo de un sistema de monitoreo ambiental para un centro de datos crítico. En este sistema, Arduino actúa como plataforma central para captar datos precisos de temperatura, humedad y calidad del aire, transmitiéndolos a un servidor especializado para análisis y almacenamiento. Se incluyen alertas automáticas cuando se exceden los límites operativos, lo que permite una respuesta rápida ante riesgos para el equipamiento.

        // Bloque 12/31: párrafo normal
        .row.justify-content-center.mb-0
          .col-12
            h2 Ejercicio práctico: Sistema básico de monitoreo de temperatura con Arduino UNO y sensor DHT22

    // Bloque 13/31: texto-color-imagen
    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-4 Este ejercicio permite implementar una solución funcional básica utilizando la plataforma Arduino, ideal para familiarizarse con el manejo de sensores y la lógica de alertas en entornos IoT.
        .bg-color-2.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-1
              i.fas.fa-arrow-circle-right
              | #[strong Conexión del sensor:] Conectar el DHT22 al pin digital 2 de Arduino, con alimentación de 3.3V y conexión a tierra según especificaciones.
            li.mb-1
              i.fas.fa-arrow-circle-right
              | #[strong Instalación de librería:] Instalar la librería oficial DHT desde el gestor del IDE de Arduino, asegurando la compatibilidad de versiones.
            li.mb-1
              i.fas.fa-arrow-circle-right
              | #[strong Inicialización del código:] Configurar la comunicación serie a 9600 baudios, incluir la librería DHT y definir los parámetros del sensor.
            li.mb-1
              i.fas.fa-arrow-circle-right
              | #[strong Bucle principal:] Leer la temperatura cada 2 segundos, validar las lecturas y transmitirlas por puerto serie en formato estructurado.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | #[strong Alerta visual:] Activar un LED cuando la temperatura supere los 25 °C y enviar una alerta mediante comunicación serie.
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/7.png", data-aos="zoom-in")

    // Bloque 14/31: bg-full-icono-texto
    .bg-full-width.bg-color-3.text-white.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/8.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 #[strong Resultado]: el sistema muestra lecturas precisas cada 2 segundos (±0.5 °C) y activa de forma confiable el LED ante sobrecalentamiento. Esta implementación sirve como base para soluciones más complejas y escalables hacia entornos industriales.

    // Bloque 15/31: titulo-segundo
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Uso de herramientas en la nube para IoT (AWS, Google Cloud)

    // Bloque 16/31: imagen-audio 6:6
    .bg-full-width.bg-color-8.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-6
            figure
              img(src="@/assets/curso/tema1/9.svg", data-aos="zoom-in")
          .col-lg-6
            p(data-aos="fade-left").mb-4 A continuación, se presenta un podcast que explora el impacto de las plataformas de computación en la nube en el desarrollo de aplicaciones IoT, analizando sus ventajas clave, capacidades técnicas y casos de uso en contextos tanto académicos como industriales.
            
            TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
              texto="Transformación del desarrollo IoT a través de plataformas avanzadas de computación en la nube"
              tiempo
              :audio="require('../../assets/curso/podcast/podcast1.mp3')"
            )
    

    // Bloque 17/31: párrafo normal
    .row.justify-content-center.mb-4
      .col-12
        h2 Ejemplo de aplicación en ingeniería de software

    // Bloque 18/31: texto-iconobloque-imagen
    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-4 Una aplicación empresarial sofisticada puede utilizar AWS IoT como columna vertebral tecnológica para la gestión de una flota vehicular. Este sistema administra la comunicación bidireccional con dispositivos GPS y sensores telemáticos instalados en los vehículos.
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/10.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Los datos de ubicación se procesan en tiempo real, se calculan rutas optimizadas, se analizan patrones de consumo de combustible y se generan alertas inteligentes de mantenimiento preventivo. La arquitectura basada en la nube se adapta tanto a pequeñas flotas como a grandes corporaciones sin necesidad de rediseñar el sistema.
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/11.png", data-aos="zoom-in")

    // Bloque 19/31: párrafo normal
    .row.justify-content-center.mb-4
      .col-12
        h2 Ejercicio práctico: Configuración de un dispositivo virtual en AWS IoT Core
        p Este ejercicio práctico guía la creación de un dispositivo virtual capaz de recibir y procesar datos de sensores en AWS con políticas de seguridad estrictas:

    // Bloque 20/31: slider-a
    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/12.png")
            .col-lg-7
              h5 1. Creación de cuenta y acceso a AWS IoT Core
              p Ingresar a la consola de administración de AWS, explorar la interfaz del servicio IoT Core y familiarizarse con sus conceptos fundamentales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/13.png")
            .col-lg-7
              h5 2. Registro del dispositivo IoT
              p Registrar un nuevo dispositivo, generar un certificado X.509 único y descargar las claves privada y pública junto con el certificado de Amazon Root CA.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/14.png")
            .col-lg-7
              h5 3. Creación de política de seguridad
              p Definir una política que permita únicamente conexión, publicación y suscripción a topics con el formato sensor/data/deviceID, aplicando el principio de menor privilegio.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/15.png")
            .col-lg-7
              h5 4. Asociación de política y simulación de conexión
              p Asociar la política al certificado del dispositivo. Configurar un simulador MQTT que se conecte al endpoint de AWS IoT y verificar la autenticación exitosa.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema1/16.png")
            .col-lg-7
              h5 5. Envío de datos simulados
              p Transmitir mensajes JSON con datos simulados de temperatura y humedad cada 30 segundos. Confirmar la recepción en la consola de AWS IoT.

    // Bloque 21/31: bg-full-icono-texto
    .bg-full-width.bg-color-3.text-white.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/16.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 #[strong Resultado esperado:] el dispositivo virtual se conecta correctamente usando certificados X.509, transmite datos con entrega garantizada cada 30 segundos, los mensajes se visualizan con timestamps precisos en la consola de AWS, y se establece una base técnica para futuras integraciones con servicios como Kinesis, Lambda y S3.

    // Bloque 22/31: titulo-segundo
    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Integración de hardware y software

    // Bloque 23/31: color-texto-imagen 8:4
    .row.mb-5
      .col-lg-8
        .bg-color-5.p-4(data-aos="fade-left").mb-4
          p.mb-0 La integración efectiva y robusta entre componentes diversos de hardware y software constituye uno de los aspectos más críticos y desafiantes en el desarrollo de sistemas IoT exitosos y escalables. Esta integración requiere un entendimiento profundo tanto de las capacidades y limitaciones del hardware seleccionado como de las arquitecturas de software que optimicen estos recursos. Factores como el consumo energético, la latencia de comunicación y la confiabilidad operativa son determinantes en el diseño de soluciones funcionales.
        p(data-aos="fade-left") El proceso de integración involucra múltiples disciplinas técnicas que deben coordinarse cuidadosamente para lograr un sistema cohesivo que funcione de manera confiable en condiciones reales. La complejidad se incrementa al considerar la interoperabilidad entre hardware de distintos fabricantes y la necesidad de mantener compatibilidad con estándares industriales existentes. Este proceso meticuloso incluye:
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/17.png", data-aos="zoom-in")

    // Bloque 24/31: slyderf-cards
    .bg-full-width.bg-color-15.mb-5
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-4
            figure
              img(src='@/assets/curso/tema1/18.png', alt='')
          .col-lg-8


            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/19.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Selección de componentes compatibles
                p.text-center Basada en criterios técnicos como voltajes, protocolos y precisión.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/20.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Implementación de protocolos estándar
                p.text-center Garantiza interoperabilidad entre dispositivos y sistemas.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/21.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Desarrollo de capas de abstracción
                p.text-center Facilita el mantenimiento del código y la escalabilidad.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/22.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Uso de patrones de diseño probados
                p.text-center Permite la intercambiabilidad de componentes sin comprometer el sistema.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/23.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Documentación y arquitectura técnica
                p.text-center Fundamental para la colaboración entre equipos y la preservación del conocimiento.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema1/24.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Interfaces estándar y APIs definidas
                p.text-center Facilitan la integración con sistemas legados y nuevas expansiones.


    // Bloque 25/31: párrafo normal
    .row.justify-content-center.mb-4
      .col-12
        h3 Ejemplo representativo

    // Bloque 26/31: texto-color-imagen
    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-4 En ingeniería de software, un caso típico es el desarrollo de un sistema de automatización industrial que combina sensores de presión de alta precisión, válvulas neumáticas electrónicamente controladas e interfaces web para operación remota. El sistema se estructura mediante una arquitectura por capas:
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          ul.lista-ul--color
            li.mb-0
              i.fas.fa-arrow-circle-right
              | #[strong Capa de hardware:] maneja la comunicación de bajo nivel con los dispositivos físicos.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | #[strong Capa de lógica de negocio:] procesa reglas complejas de automatización y seguridad.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | #[strong Capa de presentación:] proporciona interfaces intuitivas y responsivas para operadores.
        p(data-aos="fade-left") Esta separación de responsabilidades facilita la escalabilidad, el mantenimiento y la incorporación de nuevas funcionalidades sin afectar el funcionamiento general.
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/25.png", data-aos="zoom-in")

    // Bloque 27/31: párrafo normal
    .row.justify-content-center.mb-5
      .col-12
        h3 Ejercicio práctico: Desarrollo de una aplicación con sensor ultrasónico y visualización web
        p Este ejercicio propone crear una aplicación completa que integre un sensor HC-SR04 con Arduino y una interfaz web moderna utilizando Node.js.

    // Bloque 28/31: img-acordeon
    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/26.png", data-aos="zoom-in")
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="1. Lectura de sensor y transmisión de datos")
            p Conectar el sensor HC-SR04 (trigger en pin 7, echo en pin 8). Programar la lectura de distancia cada segundo y enviar los datos en formato JSON estructurado por puerto serie, incluyendo timestamp y metadatos.
          .div(titulo="2. Servidor Node.js")
            p Crear un servidor usando la librería serialport para leer el puerto serie. Implementar manejo de errores y almacenar lecturas en un array temporal con rotación para eficiencia de memoria.
          .div(titulo="3. Interfaz web y comunicación HTTP")
            p Desarrollar un endpoint RESTful que sirva los datos. Crear una página web responsiva que los consuma mediante fetch() con actualizaciones cada 2 segundos y manejo de errores.
          .div(titulo="4. Lógica de detección de objetos")
            p Implementar detección de objetos a menos de 20 cm sostenida por más de 500 ms. Mostrar alertas visuales dinámicas y notificaciones de sonido opcionales en la interfaz.
          .div(titulo="5. Sistema de logging")
            p Registrar todas las detecciones con timestamp, metadatos del evento y estado del sistema en un archivo CSV estructurado para análisis posterior.

    // Bloque 29/31: bg-full-icono-texto
    .bg-full-width.bg-color-3.text-white
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema1/27.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 #[strong Resultado esperado:] la aplicación integra exitosamente hardware y software, muestra distancias en tiempo real con actualizaciones fluidas cada 2 segundos, detecta objetos con precisión superior al 95%, y registra eventos detalladamente en CSV. La arquitectura resultante es escalable y lista para incluir múltiples sensores y funcionalidades adicionales.

    // Bloque 30/31: anexo-img
    .bg-full-width.bg-color-2.mb-lg-0
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Soluciones digitales para documentar, diseñar y validar prototipos electrónicos con precisión
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Soluciones digitales para documentar, diseñar y validar prototipos electrónicos con precisión, donde se aborda el uso de herramientas digitales como Fritzing para planificar, simular y documentar circuitos electrónicos, así como la evaluación de plataformas IoT empresariales.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Soluciones digitales para documentar, diseñar y validar prototipos electrónicos con precisión

          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema1/28.png', alt='')

    // Bloque 31/31: bloque-material-complementario
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/280029?page=1" target="_blank" rel="noopener noreferrer") Domínguez Mínguez, T. (2020). Desarrollo de aplicaciones IoT en la nube para Arduino y ESP8266: (1 ed.). Marcombo.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/280039?page=1" target="_blank" rel="noopener noreferrer") Domínguez Mínguez, T. (2021). Alexa. Desarrollo de aplicaciones IoT para Arduino y ESP8266: (1 ed.). Marcombo.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/58379?page=1" target="_blank" rel="noopener noreferrer") Llaneza González, P. (2018). Seguridad y responsabilidad en la internet de las cosas (IoT): ( ed.). LA LEY Soluciones Legales S.A.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/233414" target="_blank" rel="noopener noreferrer") Rosa, J. M. D. L. (2021). De la micro a la nanoelectrónica: impulsando la transformación digital: (1 ed.). Los libros de la Catarata.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/280532?page=1" target="_blank" rel="noopener noreferrer") Ruiz-Velasco Sánchez, E. & Bárcenas López, J. (2025). Educatrónica tecnología de inteligencia artificial (robótica, programación e internet de las cosas): (1 ed.). Newton Edición y Tecnología Educativa.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/OzwLGzgFhss" target="_blank" rel="noopener noreferrer") BricoGeek. (2024, 9 de febrero). Lo que debes saber sobre la RASPBERRY PI 5 🍓 (Review español). [Vídeo]. YouTube.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/SVlQw2t_FK4" target="_blank" rel="noopener noreferrer") Vacas, J. (2017, 26 de octubre). Tutorial práctico sobre Fritzing). [Vídeo]. YouTube.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
