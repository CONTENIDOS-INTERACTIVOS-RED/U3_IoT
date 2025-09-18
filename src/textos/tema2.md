# Tema 2: 2.  Recolección de datos de sensores

<!-- 
RUTA DE ASSETS: @/assets/curso/tema2/
DISEÑO DE REFERENCIA: tema2.png

INSTRUCCIONES:
- Numerar assets secuencialmente: 1.png, 2.svg, 3.png, etc.
- Usar **texto** para negritas (se renderiza como #[strong texto])
- Respetar orden exacto de marcadores //texto, //color, //assets
- Especificar distribución de columnas cuando sea necesario: 5:7, 4:8, 6:6

.bg-color
  &-1
    background-color: #CDD9F7
  &-2
    background-color: #FCEEB5
  &-3
    background-color: #5C2C88
  &-4
    background-color:**** #B6FBF3
  &-5
    background-color: #062678
  &-6
    background-color: #EDDBFD
-->

## BLOQUE: iconobloque-texto-imagen
//assets: 1.svg, 2.png

//iconobloque
La recolección efectiva y sistemática de datos sensoriales constituye el fundamento técnico esencial de cualquier sistema IoT exitoso. Es la base sobre la cual se construyen funcionalidades avanzadas como el análisis predictivo y la automatización inteligente. La calidad, confiabilidad, precisión y consistencia de los datos recopilados afectan directamente la efectividad de las decisiones automatizadas, la precisión de los modelos de predicción y la validez de los insights generados para optimizar procesos operativos.

//texto
Implementar un sistema robusto de recolección de datos implica considerar factores técnicos clave como la calibración periódica de sensores, la gestión de la deriva temporal, la compensación de variaciones ambientales y la validación continua de la calidad de los datos. Los errores en esta etapa crítica se propagan y amplifican, afectando la fiabilidad del sistema completo y comprometiendo decisiones estratégicas. Los sistemas modernos de adquisición de datos deben abordar aspectos como:

## BLOQUE: imagen-color 4:8
//assets: 3.png

//color
  //lista-flechas
  - Frecuencia de muestreo óptima, que equilibre la resolución temporal con el consumo energético.
  - Precisión y exactitud, alineadas a los requisitos de la aplicación específica.
  - Gestión proactiva de errores, para anticipar fallos y excepciones.
  - Optimización energética, para maximizar la autonomía del sistema.
  - Buffering local y sincronización temporal, esenciales para sistemas con múltiples sensores.
  - Redundancia y tolerancia a fallos, que garantizan la integridad de los datos frente a conectividad intermitente o interferencias.
  - Mecanismos de validación, como checksums y timestamps, que aseguran la calidad de los datos en tiempo real.

## BLOQUE: titulo-segundo
//assets:

2.1 Tipos de sensores y su aplicación

## BLOQUE: texto-color-imagen
//assets: 4.png

//texto
Los sensores son componentes fundamentales que permiten a los sistemas IoT interactuar con el entorno físico, actuando como interfaces que convierten magnitudes físicas en señales eléctricas digitales interpretables por sistemas computacionales. La selección estratégica de sensores, teniendo en cuenta rango de medición, precisión requerida, condiciones ambientales y restricciones de costo, es clave para garantizar la confiabilidad operativa, eficiencia energética y exactitud de todo el sistema IoT.

//color
La evolución tecnológica ha permitido una notable reducción en el tamaño y costo de los sensores, mejorando simultáneamente su precisión y robustez. Hoy en día, es posible medir desde variables básicas como temperatura o presión, hasta parámetros complejos como calidad del aire o características químicas específicas.

//texto
La diversidad de sensores disponibles comercialmente incluye desde opciones económicas hasta dispositivos altamente especializados. Cada tipo posee especificaciones técnicas críticas como rango de medición, precisión absoluta y relativa, tiempo de respuesta, deriva temporal y requisitos de alimentación: 

## BLOQUE: tabla
//assets:

Tabla 1. Tipo de sensor 

Tipo de sensor
Aplicación típica

DHT22 / SHT30
Temperatura y humedad en ambientes controlados

BH1750 / TSL2591
Medición de luz para agricultura de precisión y sistemas inteligentes

Sensores de pH (analógico/digital)
Monitoreo del pH del suelo en agricultura

Sensor capacitivo de humedad
Medición de humedad del suelo con alta durabilidad

Acelerómetros
Detección de vibraciones en estructuras, maquinaria y vehículos

Sensores de inclinación
Evaluación de deformaciones estructurales

Sensores de calidad del aire
Control ambiental en espacios interiores y ciudades inteligentes

## BLOQUE: bloque-video
//assets:
Internet de las Cosas
Para ampliar el concepto sobre sensores en aplicaciones de IoT, le invitamos a ver el siguiente vídeo. 

Armesto, L. (2019, 4 de agosto). 8/75 MOOC Internet de las Cosas Parte I: Electrónica. Sensores en Aplicaciones de IoT. [Vídeo]. YouTube. https://youtu.be/9gvHcaR6W7U  

## BLOQUE:
//assets: 

## Ejemplo práctico en ingeniería de software


## BLOQUE: imagen-texto-iconobloque
//assets: 5.png, 6.svg

//texto
En un sistema de monitoreo de salud estructural para edificios inteligentes se implementan sensores complementarios: acelerómetros de alta sensibilidad para detectar vibraciones sutiles, sensores de inclinación para monitorear deformaciones graduales, sensores de humedad para detectar filtraciones, y sensores de temperatura calibrados para evaluar dilataciones térmicas.

//iconobloque
Estos dispositivos operan conjuntamente para generar un índice comprensivo de salud estructural que permite mantenimiento preventivo, detección anticipada de riesgos y prolongación de la vida útil del edificio.

## BLOQUE
## Ejercicio práctico: Selección de sensores para monitoreo ambiental en invernadero
Este ejercicio propone diseñar un sistema de monitoreo ambiental para un invernadero, considerando múltiples variables críticas para el crecimiento óptimo de cultivos. El proceso de selección se basa en requisitos técnicos específicos y un análisis comparativo riguroso.

## BLOQUE: acordeon-img 8:4
//assets: 7.png

1. Definición de requisitos
Especificar rangos precisos: temperatura (0–50 °C, ±1 °C), humedad relativa (20–100  %, ±3  %), luz (0–100,000 lux, ±5  %), pH del suelo (4–8, ±0.1), humedad del suelo (0–100  %, ±2  %).

---

2. Comparación técnica
Revisar datasheets: DHT22 vs SHT30, BH1750 vs TSL2591, sensores de pH analógico vs digital, humedad capacitiva vs resistiva.


---

3. Matriz de evaluación
Criterios ponderados: precisión (30  %), rango (20  %), consumo energético (15  %), costo (15  %), facilidad de integración (10  %), disponibilidad comercial (10  %).


---

4. Selección optimizada
Calcular puntuaciones y elegir la mejor combinación técnica-económica considerando mantenimiento y durabilidad.

---

5. Especificación final
Documentar sensores seleccionados, justificación técnica y económica, esquema de conexiones y protocolo de calibración.

## BLOQUE: bg-full-icono-texto
//assets: 8.svg

Resultado obtenido: selección optimizada de SHT30, TSL2591, sensor digital de pH y sensor capacitivo de humedad, con un costo total de $85 y consumo energético de 45 mA, cumpliendo todos los requisitos técnicos y brindando base para futuras expansiones.

## BLOQUE: titulo-segundo
2.2 Métodos de adquisición de datos

## BLOQUE: imagen-color-texto
//assets: 9.png

//color
Los métodos sofisticados de adquisición de datos son esenciales en cualquier sistema IoT, ya que determinan cómo se obtienen, procesan, validan y transmiten las señales analógicas provenientes de sensores. Esta etapa crítica influye directamente en la calidad e integridad de la información, y errores en ella pueden amplificarse a lo largo del flujo de procesamiento, comprometiendo decisiones automatizadas y análisis avanzados.

//texto
Los sistemas modernos enfrentan desafíos simultáneos como interferencias electromagnéticas, variaciones térmicas, ruido en la alimentación, sincronización entre múltiples sensores y degradación de señales. Para abordarlos, se aplican técnicas especializadas que optimizan la relación señal-ruido y mejoran la fidelidad de los datos adquiridos:


## BLOQUE: slyderf-cards
//assets: 10.svg, 11.svg, 12.svg ,13.svg, 14.svg, 15.svg, imagen_lateral.png

Filtrado analógico previo
Suprime ruido de alta frecuencia antes de la conversión A/D.

---

Conversión A/D de alta resolución
Mejora la exactitud y sensibilidad de lectura.

---

Filtrado digital sofisticado
Elimina componentes no deseados en señales digitales.

---

Sobre-muestreo y promedio estadístico
Reduce variaciones aleatorias y mejora la estabilidad de lectura.

---

Sincronización precisa multicanal
Permite correlación temporal entre sensores heterogéneos.

---

Calibración automática y compensación térmica
Garantiza consistencia a largo plazo.

## BLOQUE:
## Ejemplo práctico en ingeniería de software


## BLOQUE: imagen-texto-color
//assets: 16.png

//texto
Un sistema de monitoreo de calidad del agua para plantas de tratamiento aplica estos principios. Utiliza sensores para pH, turbidez, oxígeno disuelto, conductividad y temperatura. Las lecturas se sincronizan con precisión, se filtran digitalmente para eliminar interferencias industriales y se validan con algoritmos inteligentes que detectan anomalías o fallos en sensores. 

//color
Técnicas de interpolación permiten estimar valores faltantes y los datos procesados se transmiten a un sistema central que emite alertas cuando los parámetros exceden límites regulatorios, protegiendo la salud pública y cumpliendo normativas ambientales.

## BLOQUE:
## Ejercicio práctico: Adquisición de datos con filtrado digital para sensor de vibración industrial
Este ejercicio propone implementar un sistema robusto que integre técnicas avanzadas de filtrado y detección de eventos con un acelerómetro de alta precisión: 

## BLOQUE: acordeon-img
//assets: 17.png

//acordeon
1. Conexión del sensor
Conectar un acelerómetro ADXL345 a Arduino vía I2C, configurar la sensibilidad a ±2 g, muestreo a 100 Hz y verificar la comunicación mediante pruebas básicas.

2. Adquisición y almacenamiento de datos
Leer continuamente los tres ejes (X, Y, Z), almacenando 50 muestras en un buffer circular optimizado para análisis temporal.

3. Filtrado digital
Aplicar un filtro pasa-bajas mediante promedio móvil ponderado de 10 muestras. Calibrar los coeficientes del filtro usando análisis espectral de señales reales.

4. Detección inteligente de vibración
Calcular la magnitud del vector de aceleración tridimensional. Detectar eventos cuando supere 1.5 g durante más de 100 ms consecutivos. Usar histéresis para evitar falsas alarmas.

5. Registro y transmisión de eventos
Registrar eventos con timestamp preciso, magnitud máxima, duración y características espectrales. Enviar estos datos por puerto serie en formato JSON cada segundo.

## BLOQUE: bg-full-icono-texto
//assets: 18.svg
Resultado obtenido: el sistema detecta eventos con una precisión del 92  %, reduce falsas alarmas en un 78  % mediante filtrado digital, mantiene una latencia de procesamiento inferior a 10 ms y genera registros estructurados útiles para análisis posterior, tendencias y mantenimiento predictivo en entornos industriales.

## BLOQUE: titulo-segundo
2.3 Recolección de datos en tiempo real

## BLOQUE: color-texto-imagen
//assets: 19.png

//color
La recolección de datos en tiempo real es uno de los desafíos técnicos más complejos en sistemas IoT, especialmente cuando se requiere una respuesta inmediata y determinística frente a condiciones dinámicas. Estos sistemas deben garantizar latencias predecibles y consistentes, manejar múltiples flujos de datos simultáneamente sin pérdidas críticas, y mantener una sincronización precisa entre subsistemas distribuidos geográficamente.

//texto
Para lograrlo, se requiere una arquitectura especializada que pueda escalar dinámicamente y mantener el rendimiento bajo diversas condiciones operativas. Los retos técnicos incluyen ráfagas de datos, balanceo de carga, priorización de información crítica, recuperación automática ante fallos y conmutación por error. Los sistemas modernos aplican técnicas avanzadas como:

## BLOQUE: slyderf-cards
//assets: 20.svg, 21.svg, 22.svg ,23.svg, 24.svg, 25.svg, imagen_lateral_2.png

Computación perimetral (edge computing)
Reducir la latencia trasladando el procesamiento cerca del sensor.

Streaming con garantías de entrega
Asegurar la transmisión completa de datos críticos.

Protocolos optimizados (MQTT, CoAP)
Minimizar la sobrecarga y maximizar la eficiencia del ancho de banda.

Caches distribuidos y compresión en tiempo real
Optimizar recursos en redes con limitaciones.

Agregación inteligente de datos
Reducir volumen sin pérdida de información relevante.

Monitoreo de métricas y autoajuste
Adaptar parámetros operativos en función del rendimiento.

## BLOQUE

## Ejemplo práctico en ingeniería de software

## BLOQUE: bloque-img
//assets: 26.png
Un sistema de control de tráfico inteligente recopila y analiza datos de sensores vehiculares, cámaras con análisis de imagen, sensores ambientales y detectores de incidentes. Procesa esta información en tiempo real para optimizar semáforos, detectar congestiones y accidentes, generar rutas alternativas y coordinar servicios de emergencia. La latencia total del sistema debe mantenerse por debajo de 100 ms para garantizar decisiones rápidas y efectivas en entornos urbanos dinámicos.

## BLOQUE:
## Ejercicio práctico: Sistema de recolección en tiempo real con protocolo MQTT
Este ejercicio propone desarrollar un sistema completo que recopile datos de múltiples sensores industriales utilizando MQTT, garantizando confiabilidad, baja latencia y monitoreo de rendimiento.

## BLOQUE: img-acordeon
//assets: 27.png

//acordeon
1. Configuración del broker MQTT
Instalar Mosquitto en Raspberry Pi 4 con ajustes para alta concurrencia. Crear topics jerárquicos por sensor (e.g., sensors/temperature/zone1) y definir políticas de retención y niveles de QoS adecuados.

2. Programación de nodos sensores
Configurar tres ESP8266 para publicar datos cada 500 ms con QoS=1. Incluir timestamp Unix de alta precisión y lógica de reconexión automática con backoff exponencial.

3. Cliente central de recepción de datos
Desarrollar un cliente en Python que se suscriba a los topics, almacene datos en SQLite con índices optimizados, detecte pérdidas de mensajes tras 2 s sin recibir datos y utilice buffers circulares para ráfagas.

4. Dashboard web en tiempo real
Implementar una interfaz con WebSocket bidireccional que muestre datos con actualización continua (<100 ms de latencia), alertas visuales/sonoras ante desconexiones y gráficos interactivos con historial inmediato.

5. Sistema de métricas de rendimiento
Monitorizar latencia media, percentiles, tasa de pérdida, uso de CPU y memoria. Generar reportes automáticos y alertas ante umbrales críticos.

## BLOQUE: bg-full-icono-texto
//assets: 28.svg
Resultado obtenido: el sistema gestiona más de 300 mensajes por segundo de forma sostenida, con una latencia promedio de 75 ms y un percentil 95 por debajo de 120 ms. La tasa de pérdida es inferior al 0.1  %, con detección automática de desconexiones en menos de 3 s. El dashboard opera sin degradación de rendimiento y el sistema de métricas permite optimización continua y mantenimiento proactivo.

## BLOQUE: titulo-segundo

2.4 Almacenamiento en la nube de datos IoT

## BLOQUE: texto-iconobloque-imagen
//assets: 29.svg, 30.png

//texto
El almacenamiento estratégico de datos IoT en la nube presenta desafíos técnicos únicos y complejos debido al volumen masivo de información generada continuamente, la variabilidad significativa en la estructura y formato de datos provenientes de sensores heterogéneos, y los requisitos diversos de acceso tanto para consultas históricas de análisis de tendencias como para análisis en tiempo real de condiciones operativas actuales. Las estrategias de almacenamiento deben balancear cuidadosamente múltiples factores críticos incluyendo costo total de operación, rendimiento de consultas bajo diferentes patrones de acceso, durabilidad a largo plazo de los datos, escalabilidad horizontal para manejar crecimiento exponencial y cumplimiento con regulaciones de privacidad y retención de datos. 

//iconobloque
Los sistemas modernos deben manejar eficientemente datos estructurados, semi-estructurados y no estructurados mientras mantienen capacidades de consulta rápida y análisis avanzado. La implementación debe considerar patrones de acceso temporales y geográficos para optimizar la distribución y replicación de datos.

## BLOQUE: bloque-video

La inteligencia de la nube a los dispositivos con Azure IoT
Para ampliar el conocimiento sobre el despliegue de soluciones desde la nube a los dispositivos, le invitamos a ver el siguiente vídeo: 

Plain Concepts. (2018, 22 de junio). Llevando la inteligencia de la nube a los dispositivos con Azure IoT Edge. [Vídeo]. YouTube. https://youtu.be/COHh38jDY54 

## BLOQUE: bg-icono-texto
//assets: 31.svg

Las arquitecturas modernas emplean distintos enfoques tecnológicos, como se muestra en la siguiente tabla:


## BLOQUE: slyderf-cards
//assets: imagen_lateral_3.png, 32.svg, 33.svg, 34.svg, 35.svg, 36.svg


Bases de datos de series temporales
Optimizadas para datos de sensores con índices temporales.

---

Data lakes distribuidos
Almacenan grandes volúmenes de datos no estructurados.

---

Sistemas distribuidos escalables
Escalan horizontalmente agregando nodos según demanda.

---

Arquitecturas híbridas
Combinan tecnologías para diferentes tipos de datos y usos.

--

Políticas de retención inteligente
Clasifican y migran datos según su valor y antigüedad.

## BLOQUE

## Ejemplo práctico en ingeniería de software

## BLOQUE: bloque-img
//assets: 37.png

Un sistema de monitoreo energético para edificios inteligentes distribuidos recopila datos de miles de medidores por minuto. Se utiliza una arquitectura híbrida que almacena datos recientes en bases de series temporales, históricos en almacenamiento de objetos distribuidos, datos no estructurados en data lakes y reportes en sistemas de análisis. Esto permite consultas en tiempo real, análisis de patrones estacionales, predicciones con machine learning y reportes de cumplimiento regulatorio, integrándose con sistemas de gestión existentes y adaptándose a eventos de alta demanda.

## BLOQUE

## Ejercicio práctico: Estrategia de almacenamiento en la nube con AWS para datos IoT
Este ejercicio propone una solución completa que optimiza almacenamiento, rendimiento y costos utilizando servicios nativos de AWS: 

## BLOQUE: slider-a
//assets: 38.png, 39.png, 40.png, 41.png, 42.png


Recepción de datos en streaming
Configurar Amazon Kinesis Data Firehose para recibir flujos continuos desde dispositivos IoT y dirigirlos automáticamente a S3. Implementar particionado inteligente por fecha y tipo de sensor (/año/mes/día/hora/tipo).

---

Almacenamiento en Timestream
Crear una tabla en Amazon Timestream con retención de 30 días, compresión optimizada e índices para consultas por tiempo y tipo de dispositivo.

---

Procesamiento automático con Lambda
Crear funciones AWS Lambda que realicen cálculos estadísticos por hora (promedios, máximos, mínimos, desviación estándar), detecten anomalías y transfieran datos antiguos a S3 en formato Parquet optimizado.

---

Consultas eficientes con Athena
Configurar Amazon Athena con catálogo automatizado para ejecutar consultas SQL sobre datos históricos. Crear vistas materializadas que combinen datos recientes de Timestream con históricos de S3.

---

Políticas de ciclo de vida y monitoreo
Definir reglas para mover datos a clases más económicas: S3 IA (30 días), Glacier (90 días), Deep Archive (2 años). Configurar alertas automáticas para monitoreo de costos.

## BLOQUE: bg-full-icono-texto
//assets: 43.svg

Resultado obtenido: el sistema gestiona más de 10,000 mensajes por minuto sin pérdidas, reduce costos en 60  % respecto a soluciones tradicionales, mantiene latencias de consulta en tiempo real por debajo de 200 ms y permite consultas históricas de hasta 2 años con respuesta promedio de 3 s. Integra monitoreo automatizado de costos y ajuste dinámico basado en patrones reales de uso.


## BLOQUE: titulo-segundo

2.5 Procesamiento y análisis de datos IoT

## BLOQUE: color-texto-imagen
//assets: 44.png

//color
El procesamiento inteligente y el análisis sofisticado de datos IoT transforma información bruta en conocimiento ejecutable mediante algoritmos de análisis estadístico, aprendizaje automático e inteligencia artificial. Estas técnicas permiten descubrir patrones complejos no evidentes para el análisis humano, y son esenciales para maximizar el valor y el retorno de inversión de soluciones IoT empresariales.

//texto
Los sistemas modernos deben integrar múltiples fuentes de datos con diferentes escalas temporales, detectar anomalías sutiles y generar predicciones confiables. Para lograrlo, se combina el análisis en tiempo real (baja latencia) con procesamiento por lotes (batch) para patrones a largo plazo, adaptándose dinámicamente a los cambios en las condiciones operativas.

## BLOQUE: slyderf-cards
//assets: imagen_lateral_4.png, 45.svg, 46.svg, 47.svg, 48.svg, 49.svg, 50.svg

Streaming híbrido
Análisis en tiempo real con capacidad batch para históricos.

Procesamiento distribuido
Manejo de grandes volúmenes multifuente.

Detección de anomalías avanzada
Identificación de comportamientos inusuales en espacios multidimensionales.

Modelos predictivos adaptativos
Anticipación de eventos futuros con confianza cuantificada.

Aprendizaje incremental
Mejora continua del rendimiento del modelo.

Capacidad explicativa de modelos
Interpretación comprensible de las decisiones automatizadas.

## BLOQUE: 

## Ejemplo práctico en ingeniería de software

## BLOQUE: bloque-img
//assets: 51.png

Un sistema de mantenimiento predictivo para equipos industriales analiza datos multivariados de vibración, temperatura, consumo energético, presión y otros parámetros. Utiliza redes neuronales para patrones de falla, clustering para identificar grupos de comportamiento, algoritmos de detección de anomalías y análisis de supervivencia para estimar la probabilidad de fallos. Este enfoque reduce significativamente tiempos de inactividad, optimiza costos de mantenimiento y extiende la vida útil del equipamiento.

## BLOQUE: 
## Ejercicio práctico: Análisis predictivo de anomalías en sensores industriales con machine learning
Este ejercicio desarrolla un sistema completo de detección de anomalías usando Python y técnicas de machine learning con validación rigurosa:

## BLOQUE: img-acordeon
//assets: 52.png

//acordeon
1. Generación del dataset
Crear un conjunto sintético de 10,000 registros que simule sensores de temperatura, vibración y presión, incorporando estacionalidad, desgaste gradual y un 5  % de anomalías representativas de diferentes fallos.

2. Preprocesamiento de datos
Aplicar normalización Z-score, detección de valores atípicos (IQR modificado), imputación de datos faltantes y generar variables derivadas como media móvil, desviación estándar y ratios entre sensores.

3. Entrenamiento de modelos
Comparar tres algoritmos: Isolation Forest, Local Outlier Factor y One-Class SVM. Usar el 70  % de los datos para entrenamiento y el 30  % para validación, con validación cruzada de 5 folds.

4. Evaluación de rendimiento
Calcular precisión, recall, F1-score y AUC-ROC. Analizar matrices de confusión y seleccionar el modelo con mejor balance (≥85  % de precisión, ≥90  % de recall).

5. Implementación del sistema
Clasificar nuevas lecturas en tiempo real, generar alertas con niveles de severidad, mantener monitoreo continuo del rendimiento y ofrecer explicabilidad del modelo mediante análisis de contribución de características.

## BLOQUE: bg-full-icono-texto
//assets: 53.svg
Resultado obtenido: el sistema logra una precisión del 89  % y recall del 93  %, procesa nuevas lecturas en menos de 50 ms, reduce falsos positivos al 7  %, y proporciona alertas visuales en tres niveles de severidad. Un dashboard en tiempo real muestra el rendimiento del modelo y permite a técnicos interpretar decisiones mediante análisis de características.

## BLOQUE: anexo-img
//assets: 54.png

### Visualización de datos IoT
Se invita a leer el documento Visualización de datos IoT, donde se aborda la importancia de transformar datos complejos generados por dispositivos conectados en representaciones visuales intuitivas que apoyen decisiones informadas. 

//archivo: Anexo_2.pdf

## BLOQUE: bloque-material-complementario

Domínguez Mínguez, T. (2020). Desarrollo de aplicaciones IoT en la nube para Arduino y ESP8266: (1 ed.). Marcombo. https://elibro.net/es/ereader/tecnologicadeloriente/280029?page=1

Domínguez Mínguez, T. (2021). Alexa. Desarrollo de aplicaciones IoT para Arduino y ESP8266: (1 ed.). Marcombo. https://elibro.net/es/ereader/tecnologicadeloriente/280039?page=1

Llaneza González, P. (2018). Seguridad y responsabilidad en la internet de las cosas (IoT): ( ed.). LA LEY Soluciones Legales S.A. https://elibro.net/es/ereader/tecnologicadeloriente/58379?page=1

Rosa, J. M. D. L. (2021). De la micro a la nanoelectrónica: impulsando la transformación digital: (1 ed.). Los libros de la Catarata. https://elibro.net/es/lc/tecnologicadeloriente/titulos/233414

Armesto, L. (2019, 4 de agosto). 8/75 MOOC Internet de las Cosas Parte I: Electrónica. Sensores en Aplicaciones de IoT. [Vídeo]. YouTube. https://youtu.be/9gvHcaR6W7U  

Plain Concepts. (2018, 22 de junio). Llevando la inteligencia de la nube a los dispositivos con Azure IoT Edge. [Vídeo]. YouTube. https://youtu.be/COHh38jDY54

