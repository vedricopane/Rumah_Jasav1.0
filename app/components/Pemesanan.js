import React from "react";
import { Container, Header, Content, Tab, Tabs } from "native-base";

import Tab1 from "./PemesananProses";
import Tab2 from "./PemesananSelesai";

const Pemesanan = () => {
  return (
    <Container>
      <Tabs>
        <Tab heading="Dalam Proses">
          <Tab1 />
        </Tab>
        <Tab heading="Selesai">
          <Tab2 />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default Pemesanan;
