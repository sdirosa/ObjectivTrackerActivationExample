import { useApplicationLoadedEventTracker, useTracker } from "@objectiv/tracker-react";
import { CookieConsent } from "react-cookie-consent";
import './App.css'

function CookieBanner() {
  const tracker = useTracker();
  const trackApplicationLoadedEvent = useApplicationLoadedEventTracker();

  return (
    <CookieConsent
      location="bottom"
      buttonText="Sure man!!"
      cookieName="CookieConsent"
      onAccept={() => {
        if(!tracker.active) {
          tracker.setActive(true);
          trackApplicationLoadedEvent();
        }
      }}
    >
      This website uses cookies to enhance the user experience.{" "}
      <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
    </CookieConsent>
  )
}

export default CookieBanner
