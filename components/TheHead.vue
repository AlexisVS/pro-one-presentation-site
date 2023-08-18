<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();

useSeoMeta({
  description: runtimeConfig.public.seo.description,
  ogDescription: runtimeConfig.public.seo.description,
  ogImage: runtimeConfig.public.seo.image,
  ogUrl: runtimeConfig.public.seo.url,
  twitterTitle: runtimeConfig.public.seo.name,
  twitterDescription: runtimeConfig.public.seo.description,
  twitterImage: runtimeConfig.public.seo.image,
  twitterCard: "summary_large_image",
});

useSchemaOrg([
  defineLocalBusiness({
    //     Subtype possibilities:
    // AnimalShelter
    // ArchiveOrganization
    // AutomotiveBusiness
    // ChildCare
    // Dentist
    // DryCleaningOrLaundry
    // EmergencyService
    // EmploymentAgency
    // EntertainmentBusiness
    // FinancialService
    // FoodEstablishment
    // GovernmentOffice
    // HealthAndBeautyBusiness
    // HomeAndConstructionBusiness
    // InternetCafe
    // LegalService
    // Library
    // LodgingBusiness
    // MedicalBusiness
    // ProfessionalService
    // RadioStation
    // RealEstateAgent
    // RecyclingCenter
    // SelfStorage
    // ShoppingCenter
    // SportsActivityLocation
    // Store
    // TelevisionStation
    // TouristInformationCenter
    // TravelAgency
    type: "LocalBusiness",
    telephone: runtimeConfig.public.seo.phone,
    email: runtimeConfig.public.seo.email,
    vatID: runtimeConfig.public.seo.vatId,
    currenciesAccepted: runtimeConfig.public.seo.currenciesAccepted,
    name: runtimeConfig.public.seo.name,
    url: runtimeConfig.public.seo.url,
    logo: runtimeConfig.public.seo.image,
    // sameAs: [
    //   "https://www.facebook.com/your-facebook-page",
    //   "https://www.instagram.com/your-instagram-page",
    //   "https://www.linkedin.com/your-linkedin-page",
    //   "https://twitter.com/your-twitter-page",
    //   "https://www.youtube.com/your-youtube-page",
    // ],
    // address: {
    //   streetAddress: '123 Main St',
    //   addressLocality: 'Harlan',
    //   addressRegion: 'MA',
    //   postalCode: '01234',
    //   addressCountry: 'US',
    // },
  }),
]);

useHead({
  htmlAttrs: {
    lang: useCookieLocale(),
  },
  link: [
    {
      rel: "icon",
      type: "image/ico",
      href: "./favicon.ico",
    },
  ],
});
</script>

<template>
  <slot />
</template>
