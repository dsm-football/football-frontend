import React, { useEffect } from "react";
declare global {
  interface Window {
    kakao: any;
  }
}
const Map = () => {
  useEffect(() => {
    let container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    let options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(
        36.391720502228424,
        127.36334436926299
      ), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    let map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    var geocoder = new window.kakao.maps.services.Geocoder();
    let markerPosition = new window.kakao.maps.LatLng(
      36.391720502228424,
      127.36334436926299
    );

    let marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);

    window.kakao.maps.event.addListener(
      map,
      "click",
      function (mouseEvent: any) {
        // 클릭한 위도, 경도 정보를 가져옵니다
        var latlng = mouseEvent.latLng;

        // 마커 위치를 클릭한 위치로 옮깁니다
        marker.setPosition(latlng);

        var message = "클릭한 위치의 위도는 " + latlng.getLat() + " 이고, ";
        message += "경도는 " + latlng.getLng() + " 입니다";
        console.log(message);
        geocoder.coord2RegionCode(latlng.getLng(), latlng.getLat());
      }
    );
  });

  return (
    <div>
      <div id="map" style={{ width: "320px", height: "315px" }}></div>
    </div>
  );
};

export default Map;
