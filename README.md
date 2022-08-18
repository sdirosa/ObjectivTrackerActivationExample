# ObjectivTrackerActivationExample

- [main.tsx](src/main.tsx)
  - The ReactTracker is `active` when `getCookieConsentValue()` from [react-cookie-consent](https://www.npmjs.com/package/react-cookie-consent) returns 'true'
  - Configured `ObjectivProvider` to  not track ApplicationLoaded event via its options

- [App.tsx](/src/App.tsx)
  - Added a new `CookieBanner` component to the JSX output

- [CookieBanner.tsx](src/CookieBanner.tsx)
  - This component is a wrapper around the `CookieConsent` component from [react-cookie-consent](https://www.npmjs.com/package/react-cookie-consent)
  - We get the tracker instance via the `useTracker` hook
  - And create a `trackApplicationLoadedEvent` callback using the `useApplicationLoadedEventTracker` hook
  - Finally we pass a custom `onAccept` handler to the `CookieConsent` component, to invoke `setActive(boolean)` of the tracker and trigger the `ApplicationLoadedEvent`.
