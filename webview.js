import React, { useRef } from "react";
import { WebView, Linking } from "react-native-webview";

const WebviewContainer = () => {
  const handleSetRef = _ref => {
    webviewRef = _ref;
  };

  const onNavigationStateChange = navState => {
    webviewRef.canGoBack = navState.canGoBack;
    if (!navState.url.includes("yourdomain.com")) {
      // 새 탭 열기
      Linking.openURL(navState.url);
      return false;
    }
  };

  // 이 함수를 작동시키지 않으면 stopLoading() 문제로 인해 안드로이드에서 소스페이지의 다른 링크를 탭할 수 없습니다. 그래서 stopLoading를 방지하기 위해 아래 함수를 실행합니다.
  const onShouldStartLoadWithRequest = event => {
    if (!event.url.includes("yourdomain.com")) {
      Linking.openURL(event.url);
      return false;
    }
    return true;
  };
  return (
    <WebView
      ref={handleSetRef}
      source={require('./index.html')}
      // 웹뷰 로딩이 시작되거나 끝나면 호출하는 함수 navState로 url 감지
      onNavigationStateChange={onNavigationStateChange}
      // 처음 호출한 URL에서 다시 Redirect하는 경우에, 사용하면 navState url 감지
      onShouldStartLoadWithRequest={onShouldStartLoadWithRequest}
    />
  );
};
export default WebviewContainer;
