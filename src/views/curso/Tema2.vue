<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Recolección de datos de sensores'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    // Bloque 1/47: iconobloque-texto-imagen
    .row.mb-5
      .col-lg-8
        .bg-color-5.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La recolección efectiva y sistemática de datos sensoriales constituye el fundamento técnico esencial de cualquier sistema IoT exitoso. Es la base sobre la cual se construyen funcionalidades avanzadas como el análisis predictivo y la automatización inteligente. La calidad, confiabilidad, precisión y consistencia de los datos recopilados afectan directamente la efectividad de las decisiones automatizadas, la precisión de los modelos de predicción y la validez de los insights generados para optimizar procesos operativos.
        p(data-aos="fade-left") Implementar un sistema robusto de recolección de datos implica considerar factores técnicos clave como la calibración periódica de sensores, la gestión de la deriva temporal, la compensación de variaciones ambientales y la validación continua de la calidad de los datos. Los errores en esta etapa crítica se propagan y amplifican, afectando la fiabilidad del sistema completo y comprometiendo decisiones estratégicas. Los sistemas modernos de adquisición de datos deben abordar aspectos como:
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")

    // Bloque 2/47: imagen-color 4:8
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/3.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-2.p-4.py-lg-5(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-1
              i.fas.fa-arrow-circle-right
              | Frecuencia de muestreo óptima, que equilibre la resolución temporal con el consumo energético.
            li.mb-1
              i.fas.fa-arrow-circle-right
              | Precisión y exactitud, alineadas a los requisitos de la aplicación específica.
            li.mb-1
              i.fas.fa-arrow-circle-right
              | Gestión proactiva de errores, para anticipar fallos y excepciones.
            li.mb-1
              i.fas.fa-arrow-circle-right
              | Optimización energética, para maximizar la autonomía del sistema.
            li.mb-1
              i.fas.fa-arrow-circle-right
              | Buffering local y sincronización temporal, esenciales para sistemas con múltiples sensores.
            li.mb-1
              i.fas.fa-arrow-circle-right
              | Redundancia y tolerancia a fallos, que garantizan la integridad de los datos frente a conectividad intermitente o interferencias.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | Mecanismos de validación, como checksums y timestamps, que aseguran la calidad de los datos en tiempo real.

    // Bloque 3/47: titulo-segundo
    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Tipos de sensores y su aplicación

    // Bloque 4/47: texto-color-imagen
    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-4 Los sensores son componentes fundamentales que permiten a los sistemas IoT interactuar con el entorno físico, actuando como interfaces que convierten magnitudes físicas en señales eléctricas digitales interpretables por sistemas computacionales. La selección estratégica de sensores, teniendo en cuenta rango de medición, precisión requerida, condiciones ambientales y restricciones de costo, es clave para garantizar la confiabilidad operativa, eficiencia energética y exactitud de todo el sistema IoT.
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          p.mb-0 La evolución tecnológica ha permitido una notable reducción en el tamaño y costo de los sensores, mejorando simultáneamente su precisión y robustez. Hoy en día, es posible medir desde variables básicas como temperatura o presión, hasta parámetros complejos como calidad del aire o características químicas específicas.
        p(data-aos="fade-left") La diversidad de sensores disponibles comercialmente incluye desde opciones económicas hasta dispositivos altamente especializados. Cada tipo posee especificaciones técnicas críticas como rango de medición, precisión absoluta y relativa, tiempo de respuesta, deriva temporal y requisitos de alimentación:
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")



    .bg-full-width.bg-color-12
      .p-4.p-md-5
        // Bloque 5/47: tabla
        .titulo-figura.mb-2
          h5 Tabla 1. 
          span Tipo de sensor

        .tabla-a.color-acento-contenido.mb-5
          table
            caption Clasificación de sensores IoT según aplicación
            thead
              tr
                th.bg-color-tabla.text-white Tipo de sensor
                th.bg-color-tabla.text-white Aplicación típica
            tbody
              tr
                td DHT22 / SHT30
                td Temperatura y humedad en ambientes controlados
              tr
                td BH1750 / TSL2591
                td Medición de luz para agricultura de precisión y sistemas inteligentes
              tr
                td Sensores de pH (analógico/digital)
                td Monitoreo del pH del suelo en agricultura
              tr
                td Sensor capacitivo de humedad
                td Medición de humedad del suelo con alta durabilidad
              tr
                td Acelerómetros
                td Detección de vibraciones en estructuras, maquinaria y vehículos
              tr
                td Sensores de inclinación
                td Evaluación de deformaciones estructurales
              tr
                td Sensores de calidad del aire
                td Control ambiental en espacios interiores y ciudades inteligentes

        .row.justify-content-center
          .col-lg-8
            .bg-color-white.shadow-soft.p-4.mb-4
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/video.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h5.mb-1 Internet de las Cosas
                      p.mb-0 Para ampliar el concepto sobre sensores en aplicaciones de IoT, le invitamos a ver el siguiente vídeo.
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://youtu.be/9gvHcaR6W7U" target="_blank")
                        span Ver video
                        i.fas.fa-arrow-right


    // Bloque 7/47: párrafo normal
    .row.justify-content-center.mb-4
      .col-12
        h2 Ejemplo práctico en ingeniería de software

    // Bloque 8/47: imagen-texto-iconobloque
    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/5.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-4 En un sistema de monitoreo de salud estructural para edificios inteligentes se implementan sensores complementarios: acelerómetros de alta sensibilidad para detectar vibraciones sutiles, sensores de inclinación para monitorear deformaciones graduales, sensores de humedad para detectar filtraciones, y sensores de temperatura calibrados para evaluar dilataciones térmicas.
        .bg-color-5.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/6.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Estos dispositivos operan conjuntamente para generar un índice comprensivo de salud estructural que permite mantenimiento preventivo, detección anticipada de riesgos y prolongación de la vida útil del edificio.

    // Bloque 9/47: párrafo normal
    .row.justify-content-center.mb-4
      .col-12
        h3 Ejercicio práctico: Selección de sensores para monitoreo ambiental en invernadero
        p Este ejercicio propone diseñar un sistema de monitoreo ambiental para un invernadero, considerando múltiples variables críticas para el crecimiento óptimo de cultivos. El proceso de selección se basa en requisitos técnicos específicos y un análisis comparativo riguroso.

    // Bloque 10/47: acordeon-img 8:4
    .row.mb-5
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="1. Definición de requisitos")
            p Especificar rangos precisos: temperatura (0–50 °C, ±1 °C), humedad relativa (20–100 %, ±3 %), luz (0–100,000 lux, ±5 %), pH del suelo (4–8, ±0.1), humedad del suelo (0–100 %, ±2 %).
          .div(titulo="2. Comparación técnica")
            p Revisar datasheets: DHT22 vs SHT30, BH1750 vs TSL2591, sensores de pH analógico vs digital, humedad capacitiva vs resistiva.
          .div(titulo="3. Matriz de evaluación")
            p Criterios ponderados: precisión (30 %), rango (20 %), consumo energético (15 %), costo (15 %), facilidad de integración (10 %), disponibilidad comercial (10 %).
          .div(titulo="4. Selección optimizada")
            p Calcular puntuaciones y elegir la mejor combinación técnica-económica considerando mantenimiento y durabilidad.
          .div(titulo="5. Especificación final")
            p Documentar sensores seleccionados, justificación técnica y económica, esquema de conexiones y protocolo de calibración.
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/7.png", data-aos="zoom-in")

    // Bloque 11/47: bg-full-icono-texto
    .bg-full-width.bg-color-3.text-white.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/8.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 #[strong Resultado obtenido:] selección optimizada de SHT30, TSL2591, sensor digital de pH y sensor capacitivo de humedad, con un costo total de $85 y consumo energético de 45 mA, cumpliendo todos los requisitos técnicos y brindando base para futuras expansiones.

    // Bloque 12/47: titulo-segundo
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Métodos de adquisición de datos

    // Bloque 13/47: imagen-color-texto
    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/9.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-6.p-4(data-aos="fade-left").mb-4
          p.mb-0 Los métodos sofisticados de adquisición de datos son esenciales en cualquier sistema IoT, ya que determinan cómo se obtienen, procesan, validan y transmiten las señales analógicas provenientes de sensores. Esta etapa crítica influye directamente en la calidad e integridad de la información, y errores en ella pueden amplificarse a lo largo del flujo de procesamiento, comprometiendo decisiones automatizadas y análisis avanzados.
        p(data-aos="fade-left") Los sistemas modernos enfrentan desafíos simultáneos como interferencias electromagnéticas, variaciones térmicas, ruido en la alimentación, sincronización entre múltiples sensores y degradación de señales. Para abordarlos, se aplican técnicas especializadas que optimizan la relación señal-ruido y mejoran la fidelidad de los datos adquiridos:

    // Bloque 14/47: slyderf-cards
    .bg-full-width.bg-color-15.mb-5
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-8
            p(data-aos="fade-left") Los sistemas modernos enfrentan desafíos técnicos que requieren técnicas especializadas:

            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/10.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Filtrado analógico previo
                p.text-center Suprime ruido de alta frecuencia antes de la conversión A/D.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/11.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Conversión A/D de alta resolución
                p.text-center Mejora la exactitud y sensibilidad de lectura.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/12.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Filtrado digital sofisticado
                p.text-center Elimina componentes no deseados en señales digitales.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/13.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Sobre-muestreo y promedio estadístico
                p.text-center Reduce variaciones aleatorias y mejora la estabilidad de lectura.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/14.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Sincronización precisa multicanal
                p.text-center Permite correlación temporal entre sensores heterogéneos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/15.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Calibración automática y compensación térmica
                p.text-center Garantiza consistencia a largo plazo.

          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/imagen_lateral.png', alt='')

    // Bloque 15/47: párrafo normal
    .row.justify-content-center.mb-4
      .col-12
        h2 Ejemplo práctico en ingeniería de software

    // Bloque 16/47: imagen-texto-color
    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/16.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-4 Un sistema de monitoreo de calidad del agua para plantas de tratamiento aplica estos principios. Utiliza sensores para pH, turbidez, oxígeno disuelto, conductividad y temperatura. Las lecturas se sincronizan con precisión, se filtran digitalmente para eliminar interferencias industriales y se validan con algoritmos inteligentes que detectan anomalías o fallos en sensores.
        .bg-color-5.p-4(data-aos="fade-left")
          p.mb-0 Técnicas de interpolación permiten estimar valores faltantes y los datos procesados se transmiten a un sistema central que emite alertas cuando los parámetros exceden límites regulatorios, protegiendo la salud pública y cumpliendo normativas ambientales.

    // Bloque 17/47: párrafo normal
    .row.justify-content-center.mb-4
      .col-12
        h2 Ejercicio práctico: Adquisición de datos con filtrado digital para sensor de vibración industrial
        p Este ejercicio propone implementar un sistema robusto que integre técnicas avanzadas de filtrado y detección de eventos con un acelerómetro de alta precisión:

    // Bloque 18/47: acordeon-img
    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/17.png", data-aos="zoom-in")
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="1. Conexión del sensor")
            p Conectar un acelerómetro ADXL345 a Arduino vía I2C, configurar la sensibilidad a ±2 g, muestreo a 100 Hz y verificar la comunicación mediante pruebas básicas.
          .div(titulo="2. Adquisición y almacenamiento de datos")
            p Leer continuamente los tres ejes (X, Y, Z), almacenando 50 muestras en un buffer circular optimizado para análisis temporal.
          .div(titulo="3. Filtrado digital")
            p Aplicar un filtro pasa-bajas mediante promedio móvil ponderado de 10 muestras. Calibrar los coeficientes del filtro usando análisis espectral de señales reales.
          .div(titulo="4. Detección inteligente de vibración")
            p Calcular la magnitud del vector de aceleración tridimensional. Detectar eventos cuando supere 1.5 g durante más de 100 ms consecutivos. Usar histéresis para evitar falsas alarmas.
          .div(titulo="5. Registro y transmisión de eventos")
            p Registrar eventos con timestamp preciso, magnitud máxima, duración y características espectrales. Enviar estos datos por puerto serie en formato JSON cada segundo.

    // Bloque 19/47: bg-full-icono-texto
    .bg-full-width.bg-color-3.text-white.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/18.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 #[strong Resultado obtenido:] el sistema detecta eventos con una precisión del 92 %, reduce falsas alarmas en un 78 % mediante filtrado digital, mantiene una latencia de procesamiento inferior a 10 ms y genera registros estructurados útiles para análisis posterior, tendencias y mantenimiento predictivo en entornos industriales.

    // Bloque 20/47: titulo-segundo
    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Recolección de datos en tiempo real

    // Bloque 21/47: color-texto-imagen
    .row.mb-5
      .col-lg-8
        .bg-color-5.p-4(data-aos="fade-left").mb-4
          p.mb-0 La recolección de datos en tiempo real es uno de los desafíos técnicos más complejos en sistemas IoT, especialmente cuando se requiere una respuesta inmediata y determinística frente a condiciones dinámicas. Estos sistemas deben garantizar latencias predecibles y consistentes, manejar múltiples flujos de datos simultáneamente sin pérdidas críticas, y mantener una sincronización precisa entre subsistemas distribuidos geográficamente.
        p(data-aos="fade-left") Para lograrlo, se requiere una arquitectura especializada que pueda escalar dinámicamente y mantener el rendimiento bajo diversas condiciones operativas. Los retos técnicos incluyen ráfagas de datos, balanceo de carga, priorización de información crítica, recuperación automática ante fallos y conmutación por error. Los sistemas modernos aplican técnicas avanzadas como:
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/19.png", data-aos="zoom-in")

    // Bloque 22/47: slyderf-cards
    .bg-full-width.bg-color-15.mb-5
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-8
            p(data-aos="fade-left") Los sistemas modernos aplican técnicas avanzadas para garantizar recolección efectiva:

            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/20.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Computación perimetral (edge computing)
                p.text-center Reducir la latencia trasladando el procesamiento cerca del sensor.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/21.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Streaming con garantías de entrega
                p.text-center Asegurar la transmisión completa de datos críticos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/22.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Protocolos optimizados (MQTT, CoAP)
                p.text-center Minimizar la sobrecarga y maximizar la eficiencia del ancho de banda.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/23.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Caches distribuidos y compresión en tiempo real
                p.text-center Optimizar recursos en redes con limitaciones.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/24.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Agregación inteligente de datos
                p.text-center Reducir volumen sin pérdida de información relevante.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/25.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Monitoreo de métricas y autoajuste
                p.text-center Adaptar parámetros operativos en función del rendimiento.

          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/imagen_lateral_2.png', alt='')

    // Bloque 23/47: párrafo normal
    .row.justify-content-center.mb-4
      .col-12
        h3 Ejemplo práctico en ingeniería de software


    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Un sistema de control de tráfico inteligente recopila y analiza datos de sensores vehiculares, cámaras con análisis de imagen, sensores ambientales y detectores de incidentes. Procesa esta información en tiempo real para optimizar semáforos, detectar congestiones y accidentes, generar rutas alternativas y coordinar servicios de emergencia. La latencia total del sistema debe mantenerse por debajo de 100 ms para garantizar decisiones rápidas y efectivas en entornos urbanos dinámicos.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema2/26.png', alt='')
    

    // Bloque 25/47: párrafo normal
    .row.justify-content-center.mb-4
      .col-12
        h2 Ejercicio práctico: Sistema de recolección en tiempo real con protocolo MQTT
        p Este ejercicio propone desarrollar un sistema completo que recopile datos de múltiples sensores industriales utilizando MQTT, garantizando confiabilidad, baja latencia y monitoreo de rendimiento.

    // Bloque 26/47: img-acordeon
    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/27.png", data-aos="zoom-in")
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="1. Configuración del broker MQTT")
            p Instalar Mosquitto en Raspberry Pi 4 con ajustes para alta concurrencia. Crear topics jerárquicos por sensor (e.g., sensors/temperature/zone1) y definir políticas de retención y niveles de QoS adecuados.
          .div(titulo="2. Programación de nodos sensores")
            p Configurar tres ESP8266 para publicar datos cada 500 ms con QoS=1. Incluir timestamp Unix de alta precisión y lógica de reconexión automática con backoff exponencial.
          .div(titulo="3. Cliente central de recepción de datos")
            p Desarrollar un cliente en Python que se suscriba a los topics, almacene datos en SQLite con índices optimizados, detecte pérdidas de mensajes tras 2 s sin recibir datos y utilice buffers circulares para ráfagas.
          .div(titulo="4. Dashboard web en tiempo real")
            p Implementar una interfaz con WebSocket bidireccional que muestre datos con actualización continua (<100 ms de latencia), alertas visuales/sonoras ante desconexiones y gráficos interactivos con historial inmediato.
          .div(titulo="5. Sistema de métricas de rendimiento")
            p Monitorizar latencia media, percentiles, tasa de pérdida, uso de CPU y memoria. Generar reportes automáticos y alertas ante umbrales críticos.

    // Bloque 27/47: bg-full-icono-texto
    .bg-full-width.bg-color-3.text-white.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/28.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 #[strong Resultado obtenido:] el sistema gestiona más de 300 mensajes por segundo de forma sostenida, con una latencia promedio de 75 ms y un percentil 95 por debajo de 120 ms. La tasa de pérdida es inferior al 0.1 %, con detección automática de desconexiones en menos de 3 s. El dashboard opera sin degradación de rendimiento y el sistema de métricas permite optimización continua y mantenimiento proactivo.

    // Bloque 28/47: titulo-segundo
    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] Almacenamiento en la nube de datos IoT

    // Bloque 29/47: texto-iconobloque-imagen
    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left").mb-4 El almacenamiento estratégico de datos IoT en la nube presenta desafíos técnicos únicos y complejos debido al volumen masivo de información generada continuamente, la variabilidad significativa en la estructura y formato de datos provenientes de sensores heterogéneos, y los requisitos diversos de acceso tanto para consultas históricas de análisis de tendencias como para análisis en tiempo real de condiciones operativas actuales. Las estrategias de almacenamiento deben balancear cuidadosamente múltiples factores críticos incluyendo costo total de operación, rendimiento de consultas bajo diferentes patrones de acceso, durabilidad a largo plazo de los datos, escalabilidad horizontal para manejar crecimiento exponencial y cumplimiento con regulaciones de privacidad y retención de datos.
        .bg-color-5.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/29.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Los sistemas modernos deben manejar eficientemente datos estructurados, semi-estructurados y no estructurados mientras mantienen capacidades de consulta rápida y análisis avanzado. La implementación debe considerar patrones de acceso temporales y geográficos para optimizar la distribución y replicación de datos.
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/30.png", data-aos="zoom-in")

    .bg-full-width.bg-color-15.mb-lg-0
      .p-4.p-md-5
        .row.justify-content-center
          .col-lg-8
            .bg-color-white.shadow-soft.p-4.mb-4
              .row.justify-content-around.align-items-center
                .col-md-auto
                  img(src="@/assets/template/video.svg", style="width: 80px;").mx-auto.mb-4.mb-lg-0
                .col
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h5.mb-1 La inteligencia de la nube a los dispositivos con Azure IoT
                      p.mb-0 Para ampliar el conocimiento sobre el despliegue de soluciones desde la nube a los dispositivos, le invitamos a ver el siguiente vídeo:
                    .col-sm-auto
                      a.boton.color-acento-botones.texto-blanco(href="https://youtu.be/COHh38jDY54" target="_blank")
                        span Ver video
                        i.fas.fa-arrow-right


        // Bloque 31/47: bg-icono-texto
        .bg-full-width
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/31.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Las arquitecturas modernas emplean distintos enfoques tecnológicos, como se muestra en la siguiente tabla:

        // Bloque 32/47: slyderf-cards
        .bg-full-width
          .px-4.px-md-5.pb-md-0
            .row.justify-content-center.mb-0
              .col-lg-4
                figure
                  img(src='@/assets/curso/tema2/imagen_lateral_3.png', alt='')
              .col-lg-8

                SlyderF(columnas="col-12 col-lg-6")
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/tema2/32.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Bases de datos de series temporales
                    p.text-center Optimizadas para datos de sensores con índices temporales.
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/tema2/33.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Data lakes distribuidos
                    p.text-center Almacenan grandes volúmenes de datos no estructurados.
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/tema2/34.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Sistemas distribuidos escalables
                    p.text-center Escalan horizontalmente agregando nodos según demanda.
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/tema2/35.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Arquitecturas híbridas
                    p.text-center Combinan tecnologías para diferentes tipos de datos y usos.
                  .bg-color-white.p-4.h-100.shadow-app
                    img(src='@/assets/curso/tema2/36.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                    h4.text-center.mb-4 Políticas de retención inteligente
                    p.text-center Clasifican y migran datos según su valor y antigüedad.


    // Bloque 33/47: párrafo normal
    .row.justify-content-center.mt-5
      .col-12
        h2 Ejemplo práctico en ingeniería de software


    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Un sistema de monitoreo energético para edificios inteligentes distribuidos recopila datos de miles de medidores por minuto. Se utiliza una arquitectura híbrida que almacena datos recientes en bases de series temporales, históricos en almacenamiento de objetos distribuidos, datos no estructurados en data lakes y reportes en sistemas de análisis. Esto permite consultas en tiempo real, análisis de patrones estacionales, predicciones con machine learning y reportes de cumplimiento regulatorio, integrándose con sistemas de gestión existentes y adaptándose a eventos de alta demanda.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema2/37.png', alt='')
    


    // Bloque 35/47: párrafo normal
    .row.justify-content-center.mb-4
      .col-12
        h2 Ejercicio práctico: Estrategia de almacenamiento en la nube con AWS para datos IoT
        p Este ejercicio propone una solución completa que optimiza almacenamiento, rendimiento y costos utilizando servicios nativos de AWS:

    // Bloque 36/47: slider-a
    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/38.png")
            .col-lg-7
              h5 Recepción de datos en streaming
              p Configurar Amazon Kinesis Data Firehose para recibir flujos continuos desde dispositivos IoT y dirigirlos automáticamente a S3. Implementar particionado inteligente por fecha y tipo de sensor (/año/mes/día/hora/tipo).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/39.png")
            .col-lg-7
              h5 Almacenamiento en Timestream
              p Crear una tabla en Amazon Timestream con retención de 30 días, compresión optimizada e índices para consultas por tiempo y tipo de dispositivo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/40.png")
            .col-lg-7
              h5 Procesamiento automático con Lambda
              p Crear funciones AWS Lambda que realicen cálculos estadísticos por hora (promedios, máximos, mínimos, desviación estándar), detecten anomalías y transfieran datos antiguos a S3 en formato Parquet optimizado.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/41.png")
            .col-lg-7
              h5 Consultas eficientes con Athena
              p Configurar Amazon Athena con catálogo automatizado para ejecutar consultas SQL sobre datos históricos. Crear vistas materializadas que combinen datos recientes de Timestream con históricos de S3.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema2/42.png")
            .col-lg-7
              h5 Políticas de ciclo de vida y monitoreo
              p Definir reglas para mover datos a clases más económicas: S3 IA (30 días), Glacier (90 días), Deep Archive (2 años). Configurar alertas automáticas para monitoreo de costos.

    // Bloque 37/47: bg-full-icono-texto
    .bg-full-width.bg-color-3.text-white.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/43.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 #[strong Resultado obtenido:] el sistema gestiona más de 10,000 mensajes por minuto sin pérdidas, reduce costos en 60 % respecto a soluciones tradicionales, mantiene latencias de consulta en tiempo real por debajo de 200 ms y permite consultas históricas de hasta 2 años con respuesta promedio de 3 s. Integra monitoreo automatizado de costos y ajuste dinámico basado en patrones reales de uso.

    // Bloque 38/47: titulo-segundo
    #t_2_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.5] Procesamiento y análisis de datos IoT

    // Bloque 39/47: color-texto-imagen
    .row.mb-5
      .col-lg-8
        .bg-color-5.p-4(data-aos="fade-left").mb-4
          p.mb-0 El procesamiento inteligente y el análisis sofisticado de datos IoT transforma información bruta en conocimiento ejecutable mediante algoritmos de análisis estadístico, aprendizaje automático e inteligencia artificial. Estas técnicas permiten descubrir patrones complejos no evidentes para el análisis humano, y son esenciales para maximizar el valor y el retorno de inversión de soluciones IoT empresariales.
        p(data-aos="fade-left") Los sistemas modernos deben integrar múltiples fuentes de datos con diferentes escalas temporales, detectar anomalías sutiles y generar predicciones confiables. Para lograrlo, se combina el análisis en tiempo real (baja latencia) con procesamiento por lotes (batch) para patrones a largo plazo, adaptándose dinámicamente a los cambios en las condiciones operativas.
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/44.png", data-aos="zoom-in")

    // Bloque 40/47: slyderf-cards
    .bg-full-width.bg-color-15.mb-5
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-5
          .col-lg-4
            figure
              img(src='@/assets/curso/tema2/imagen_lateral_4.png', alt='')
          .col-lg-8
            p(data-aos="fade-left") Técnicas avanzadas de procesamiento y análisis de datos IoT:

            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/45.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Streaming híbrido
                p.text-center Análisis en tiempo real con capacidad batch para históricos.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/46.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Procesamiento distribuido
                p.text-center Manejo de grandes volúmenes multifuente.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/47.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Detección de anomalías avanzada
                p.text-center Identificación de comportamientos inusuales en espacios multidimensionales.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/48.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Modelos predictivos adaptativos
                p.text-center Anticipación de eventos futuros con confianza cuantificada.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/49.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Aprendizaje incremental
                p.text-center Mejora continua del rendimiento del modelo.
              .bg-color-white.p-4.h-100.shadow-app
                img(src='@/assets/curso/tema2/50.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Capacidad explicativa de modelos
                p.text-center Interpretación comprensible de las decisiones automatizadas.


    // Bloque 41/47: párrafo normal
    .row.justify-content-center.mb-5
      .col-12
        h2 Ejemplo práctico en ingeniería de software

    .bg-color-6.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Un sistema de mantenimiento predictivo para equipos industriales analiza datos multivariados de vibración, temperatura, consumo energético, presión y otros parámetros. Utiliza redes neuronales para patrones de falla, clustering para identificar grupos de comportamiento, algoritmos de detección de anomalías y análisis de supervivencia para estimar la probabilidad de fallos. Este enfoque reduce significativamente tiempos de inactividad, optimiza costos de mantenimiento y extiende la vida útil del equipamiento.
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema2/51.png', alt='')
    


    // Bloque 43/47: párrafo normal
    .row.justify-content-center.mb-5
      .col-12
        h2 Ejercicio práctico: Análisis predictivo de anomalías en sensores industriales con machine learning
        p Este ejercicio desarrolla un sistema completo de detección de anomalías usando Python y técnicas de machine learning con validación rigurosa:

    // Bloque 44/47: img-acordeon
    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/52.png", data-aos="zoom-in")
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="1. Generación del dataset")
            p Crear un conjunto sintético de 10,000 registros que simule sensores de temperatura, vibración y presión, incorporando estacionalidad, desgaste gradual y un 5 % de anomalías representativas de diferentes fallos.
          .div(titulo="2. Preprocesamiento de datos")
            p Aplicar normalización Z-score, detección de valores atípicos (IQR modificado), imputación de datos faltantes y generar variables derivadas como media móvil, desviación estándar y ratios entre sensores.
          .div(titulo="3. Entrenamiento de modelos")
            p Comparar tres algoritmos: Isolation Forest, Local Outlier Factor y One-Class SVM. Usar el 70 % de los datos para entrenamiento y el 30 % para validación, con validación cruzada de 5 folds.
          .div(titulo="4. Evaluación de rendimiento")
            p Calcular precisión, recall, F1-score y AUC-ROC. Analizar matrices de confusión y seleccionar el modelo con mejor balance (≥85 % de precisión, ≥90 % de recall).
          .div(titulo="5. Implementación del sistema")
            p Clasificar nuevas lecturas en tiempo real, generar alertas con niveles de severidad, mantener monitoreo continuo del rendimiento y ofrecer explicabilidad del modelo mediante análisis de contribución de características.

    // Bloque 45/47: bg-full-icono-texto
    .bg-full-width.bg-color-3.text-white.mb-0
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/53.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 #[strong Resultado obtenido:] el sistema logra una precisión del 89 % y recall del 93 %, procesa nuevas lecturas en menos de 50 ms, reduce falsos positivos al 7 %, y proporciona alertas visuales en tres niveles de severidad. Un dashboard en tiempo real muestra el rendimiento del modelo y permite a técnicos interpretar decisiones mediante análisis de características.

    // Bloque 46/47: anexo-img
    .bg-full-width.bg-color-2.mb-lg-0
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Visualización de datos IoT
            p.mb-4(data-aos="fade-right") Se invita a leer el documento Visualización de datos IoT, donde se aborda la importancia de transformar datos complejos generados por dispositivos conectados en representaciones visuales intuitivas que apoyen decisiones informadas.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Visualización de datos IoT

          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/54.png', alt='')

    // Bloque 47/47: actividad
    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad
          Actividad(:cuestionario="cuestionario")

    // Bloque 48/47: bloque-material-complementario
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
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/9gvHcaR6W7U" target="_blank" rel="noopener noreferrer") Armesto, L. (2019, 4 de agosto). 8/75 MOOC Internet de las Cosas Parte I: Electrónica. Sensores en Aplicaciones de IoT. [Vídeo]. YouTube.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/COHh38jDY54" target="_blank" rel="noopener noreferrer") Plain Concepts. (2018, 22 de junio). Llevando la inteligencia de la nube a los dispositivos con Azure IoT Edge. [Vídeo]. YouTube.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
import cuestionarios from '@/config/cuestionarios'

export default {
  name: 'Tema2',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: cuestionarios.tema2
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
