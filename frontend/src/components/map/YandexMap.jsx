import "./map.css";

import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";

const YandexMap = () => {
  return (
    <>
      <section className="container">
        <div className="border-4 border-primaryLight">
          <YMaps>
            <Map
              state={{
                center: [56.803505, 60.591195],
                zoom: 16,
                controls: ["zoomControl", "fullscreenControl"],
              }}
              width="100%"
              height="300px"
              modules={[
                "control.ZoomControl",
                "control.FullscreenControl",
                "geoObject.addon.balloon",
                "geoObject.addon.hint",
              ]}
            >
              <Placemark
                modules={["geoObject.addon.balloon"]}
                defaultGeometry={[56.803445340602664, 60.59119948099013]}
                // properties={{
                //   balloonContentHeader: "Екатеринбург, ул. Печатников д.1",
                //   balloonContentBody:
                //     "Вход в K.ést.perfume с торца. Входная группа совместна с Wildberries",
                // }}
                options={{
                  // iconLayout: "default#image",
                  // iconImageHref: `${ marker }`,
                  preset: "islands#yellowDotIcon",
                  // iconImageSize: [30, 30],
                  // iconImageOffset: [0, 0],
                  // preset: "islands#circleIcon", // список темплейтов на сайте яндекса
                  // iconColor: "green", // цвет иконки, можно также задавать в hex
                }}
                properties={{
                  iconContent: "2", // пару символов помещается
                  hintContent: "<b>кликнуть, чтобы посмотреть комментарий</b>",
                  // создаём пустой элемент с заданными размерами
                  balloonContent:
                    '<div id="driver-2" class="driver-card"><div class="balloon-header">Екатеринбург, ул. Печатников д.1</div><div>Вход в K.ést.perfume с торца здания. Входная группа совместна с Wildberries</div></div>',
                }}
                onClick={() => {
                  // ставим в очередь промисов, чтобы сработало после отрисовки балуна
                  setTimeout(() => {
                    setActivePortal(true);
                  }, 0);
                }}
              />
            </Map>
          </YMaps>
        </div>
      </section>
      <section className="bg-gray-300 md:mt-[-150px] py-20">
        <br />
        <br />
        <br />
        <br />
      </section>
    </>
  );
};

export default YandexMap;
