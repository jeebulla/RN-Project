import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  ScrollView,
  Dimensions,
} from "react-native";
const { height, width, fontScale } = Dimensions.get("window");

export default PrivacyPolicy = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.header}>Privacy Policy</Text>
          <Text>Last updated: December 16, 2023</Text>
          <Text style={styles.normalText}>
            This Privacy Policy describes Our policies and procedures on the
            collection, use and disclosure of Your information when You use the
            Service and tells You about Your privacy rights and how the law
            protects You.
          </Text>

          <Text style={styles.normalText}>
            We use Your Personal data to provide and improve the Service. By
            using the Service, You agree to the collection and use of
            information in accordance with this Privacy Policy. This Privacy
            Policy has been created with the help of the{" "}
          </Text>

          <Text style={styles.subHeader}>Interpretation and Definitions</Text>

          <Text style={styles.textHeader}>Interpretation</Text>
          <Text style={styles.normalText}>
            The words of which the initial letter is capitalized have meanings
            defined under the following conditions. The following definitions
            shall have the same meaning regardless of whether they appear in
            singular or in plural.
          </Text>
          <Text style={styles.textHeader}>Definitions</Text>
          <View>
            <Text style={styles.subHeader}>
              For the purposes of this Privacy Policy:
            </Text>
            <Text style={styles.normalText}>
              Affiliate means an entity that controls, is controlled by or is
              under common control with a party, where control means ownership
              of 50% or more of the shares, equity interest or other securities
              entitled to vote for election of directors or other managing
              authority.
            </Text>
            <Text style={styles.normalText}>
              Application refers to LunchApp, the software program provided by
              the Company.
            </Text>
            <Text style={styles.normalText}>
              Company (referred to as either the Company, We, Us or Our in this
              Agreement) refers to LunchApp.
            </Text>
            <Text style={styles.textHeader}>Country refers to: Nigeria</Text>
            <Text style={styles.normalText}>
              Device means any device that can access the Service such as a
              computer, a cellphone or a digital tablet.
            </Text>
            <Text style={styles.normalText}>
              Personal Data is any information that relates to an identified or
              identifiable individual.
            </Text>
            <Text style={styles.textHeader}>
              Service refers to the Application.
            </Text>
            <Text style={styles.normalText}>
              Service Provider means any natural or legal person who processes
              the data on behalf of the Company. It refers to third-party
              companies or individuals employed by the Company to facilitate the
              Service, to provide the Service on behalf of the Company, to
              perform services related to the Service or to assist the Company
              in analyzing how the Service is used.
            </Text>
            <Text style={styles.normalText}>
              Usage Data refers to data collected automatically, either
              generated by the use of the Service or from the Service
              infrastructure itself (for example, the duration of a page visit).
            </Text>
            <Text style={styles.normalText}>
              You means the individual accessing or using the Service, or the
              company, or other legal entity on behalf of which such individual
              is accessing or using the Service, as applicable.
            </Text>
          </View>
          <Text style={styles.subHeader}>
            Collecting and Using Your Personal Data
          </Text>
          <Text>Types of Data Collected</Text>
          <Text style={styles.textHeader}>Personal Data</Text>
          <Text style={styles.normalText}>
            While using Our Service, We may ask You to provide Us with certain
            personally identifiable information that can be used to contact or
            identify You. Personally identifiable information may include, but
            is not limited to:
          </Text>
          <View style={styles.list}>
            <Text style={styles.listText}>Email address</Text>

            <Text style={styles.listText}>First name and last name</Text>

            <Text style={styles.listText}>Phone number</Text>

            <Text style={styles.listText}>
              Address, State, Province, ZIP/Postal code, City
            </Text>
          </View>
          <View>
            <Text style={styles.textHeader}>Usage Data</Text>
            <Text style={styles.normalText}>
              Usage Data is collected automatically when using the Service.
            </Text>
            <Text style={styles.normalText}>
              Usage Data may include information such as Your Device's Internet
              Protocol address (e.g. IP address), browser type, browser version,
              the pages of our Service that You visit, the time and date of Your
              visit, the time spent on those pages, unique device identifiers
              and other diagnostic data.
            </Text>
            <Text style={styles.normalText}>
              When You access the Service by or through a mobile device, We may
              collect certain information automatically, including, but not
              limited to, the type of mobile device You use, Your mobile device
              unique ID, the IP address of Your mobile device, Your mobile
              operating system, the type of mobile Internet browser You use,
              unique device identifiers and other diagnostic data.
            </Text>
            <Text style={styles.normalText}>
              We may also collect information that Your browser sends whenever
              You visit our Service or when You access the Service by or through
              a mobile device.
            </Text>
          </View>
          <Text style={styles.textHeader}>
            Information Collected while Using the Application
          </Text>
          <Text style={styles.normalText}>
            While using Our Application, in order to provide features of Our
            Application, We may collect, with Your prior permission:
          </Text>
          <Text style={styles.normalText}>
            Pictures and other information from your Device's camera and photo
            library
          </Text>
          <Text style={styles.normalText}>
            We use this information to provide features of Our Service, to
            improve and customize Our Service. The information may be uploaded
            to the Company's servers and/or a Service Provider's server or it
            may be simply stored on Your device.
          </Text>
          <Text style={styles.normalText}>
            You can enable or disable access to this information at any time,
            through Your Device settings.
          </Text>
          <View>
            <Text style={styles.subHeader}>Use of Your Personal Data</Text>
            <Text style={styles.normalText}>
              The Company may use Personal Data for the following purposes:
            </Text>
            <Text style={styles.normalText}>
              To provide and maintain our Service, including to monitor the
              usage of our Service.
            </Text>
            <Text style={styles.normalText}>
              To manage Your Account: to manage Your registration as a user of
              the Service. The Personal Data You provide can give You access to
              different functionalities of the Service that are available to You
              as a registered user.
            </Text>
            <Text style={styles.normalText}>
              For the performance of a contract: the development, compliance and
              undertaking of the purchase contract for the products, items or
              services You have purchased or of any other contract with Us
              through the Service.
            </Text>
            <Text style={styles.normalText}>
              To contact You: To contact You by email, telephone calls, SMS, or
              other equivalent forms of electronic communication, such as a
              mobile application's push notifications regarding updates or
              informative communications related to the functionalities,
              products or contracted services, including the security updates,
              when necessary or reasonable for their implementation.
            </Text>
            <Text style={styles.normalText}>
              To provide You with news, special offers and general information
              about other goods, services and events which we offer that are
              similar to those that you have already purchased or enquired about
              unless You have opted not to receive such information.
            </Text>
            <Text style={styles.normalText}>
              To manage Your requests: To attend and manage Your requests to Us.
            </Text>
            <Text style={styles.normalText}>
              For business transfers: We may use Your information to evaluate or
              conduct a merger, divestiture, restructuring, reorganization,
              dissolution, or other sale or transfer of some or all of Our
              assets, whether as a going concern or as part of bankruptcy,
              liquidation, or similar proceeding, in which Personal Data held by
              Us about our Service users is among the assets transferred.
            </Text>

            <Text style={styles.normalText}>
              For other purposes: We may use Your information for other
              purposes, such as data analysis, identifying usage trends,
              determining the effectiveness of our promotional campaigns and to
              evaluate and improve our Service, products, services, marketing
              and your experience.
            </Text>
          </View>
          <View>
            <Text style={styles.subHeader}>
              We may share Your personal information in the following
              situations:
            </Text>

            <Text style={styles.normalText}>
              With Service Providers: We may share Your personal information
              with Service Providers to monitor and analyze the use of our
              Service, to contact You. For business transfers: We may share or
              transfer Your personal information in connection with, or during
              negotiations of, any merger, sale of Company assets, financing, or
              acquisition of all or a portion of Our business to another
              company. With Affiliates: We may share Your information with Our
              affiliates, in which case we will require those affiliates to
              honor this Privacy Policy. Affiliates include Our parent company
              and any other subsidiaries, joint venture partners or other
              companies that We control or that are under common control with
              Us. With business partners: We may share Your information with Our
              business partners to offer You certain products, services or
              promotions. With other users: when You share personal information
              or otherwise interact in the public areas with other users, such
              information may be viewed by all users and may be publicly
              distributed outside. With Your consent: We may disclose Your
              personal information for any other purpose with Your consent.
            </Text>

            <Text style={styles.subHeader}>
              Retention of Your Personal Data
            </Text>
            <Text style={styles.normalText}>
              The Company will retain Your Personal Data only for as long as is
              necessary for the purposes set out in this Privacy Policy. We will
              retain and use Your Personal Data to the extent necessary to
              comply with our legal obligations (for example, if we are required
              to retain your data to comply with applicable laws), resolve
              disputes, and enforce our legal agreements and policies.
            </Text>
            <Text style={styles.normalText}>
              The Company will also retain Usage Data for internal analysis
              purposes. Usage Data is generally retained for a shorter period of
              time, except when this data is used to strengthen the security or
              to improve the functionality of Our Service, or We are legally
              obligated to retain this data for longer time periods.
            </Text>

            <Text style={styles.subHeader}>Transfer of Your Personal Data</Text>
            <Text style={styles.normalText}>
              Your information, including Personal Data, is processed at the
              Company's operating offices and in any other places where the
              parties involved in the processing are located. It means that this
              information may be transferred to — and maintained on — computers
              located outside of Your state, province, country or other
              governmental jurisdiction where the data protection laws may
              differ than those from Your jurisdiction.
            </Text>
            <Text style={styles.normalText}>
              Your consent to this Privacy Policy followed by Your submission of
              such information represents Your agreement to that transfer.
            </Text>
            <Text style={styles.normalText}>
              The Company will take all steps reasonably necessary to ensure
              that Your data is treated securely and in accordance with this
              Privacy Policy and no transfer of Your Personal Data will take
              place to an organization or a country unless there are adequate
              controls in place including the security of Your data and other
              personal information.
            </Text>
          </View>
          <View>
            <Text style={styles.subHeader}>Delete Your Personal Data</Text>
            <Text style={styles.normalText}>
              You have the right to delete or request that We assist in deleting
              the Personal Data that We have collected about You.
            </Text>
            <Text style={styles.normalText}>
              Our Service may give You the ability to delete certain information
              about You from within the Service.
            </Text>
            <Text style={styles.normalText}>
              You may update, amend, or delete Your information at any time by
              signing in to Your Account, if you have one, and visiting the
              account settings section that allows you to manage Your personal
              information. You may also contact Us to request access to,
              correct, or delete any personal information that You have provided
              to Us.
            </Text>
            <Text style={styles.normalText}>
              Please note, however, that We may need to retain certain
              information when we have a legal obligation or lawful basis to do
              so.
            </Text>
          </View>
          <Text style={styles.subHeader}>Disclosure of Your Personal Data</Text>
          <View>
            <Text style={styles.textHeader}>Business Transactions</Text>
            <Text style={styles.normalText}>
              If the Company is involved in a merger, acquisition or asset sale,
              Your Personal Data may be transferred. We will provide notice
              before Your Personal Data is transferred and becomes subject to a
              different Privacy Policy.
            </Text>
            <Text style={styles.textHeader}>Law enforcement</Text>
            <Text style={styles.normalText}>
              Under certain circumstances, the Company may be required to
              disclose Your Personal Data if required to do so by law or in
              response to valid requests by public authorities (e.g. a court or
              a government agency).
            </Text>
            <Text style={styles.textHeader}>Other legal requirements</Text>
            <Text style={styles.normalText}>
              The Company may disclose Your Personal Data in the good faith
              belief that such action is necessary to:
            </Text>

            <Text style={styles.subHeader}>Comply with a legal obligation</Text>
            <Text style={styles.normalText}>
              Protect and defend the rights or property of the Company
            </Text>
            <Text style={styles.normalText}>
              Prevent or investigate possible wrongdoing in connection with the
              Service Protect the personal safety of Users of the Service or the
              public Protect against legal liability
            </Text>
          </View>
          <Text style={styles.subHeader}>Security of Your Personal Data</Text>
          <Text style={styles.normalText}>
            The security of Your Personal Data is important to Us, but remember
            that no method of transmission over the Internet, or method of
            electronic storage is 100% secure. While We strive to use
            commercially acceptable means to protect Your Personal Data, We
            cannot guarantee its absolute security.
          </Text>
          <Text style={styles.subHeader}>Children's Privacy</Text>
          <View>
            <Text style={styles.normalText}>
              Our Service does not address anyone under the age of 13. We do not
              knowingly collect personally identifiable information from anyone
              under the age of 13. If You are a parent or guardian and You are
              aware that Your child has provided Us with Personal Data, please
              contact Us. If We become aware that We have collected Personal
              Data from anyone under the age of 13 without verification of
              parental consent, We take steps to remove that information from
              Our servers.
            </Text>
            <Text style={styles.normalText}>
              If We need to rely on consent as a legal basis for processing Your
              information and Your country requires consent from a parent, We
              may require Your parent's consent before We collect and use that
              information.
            </Text>
          </View>
          <Text style={styles.subHeader}>Links to Other Websites</Text>
          <View>
            <Text style={styles.normalText}>
              Our Service may contain links to other websites that are not
              operated by Us. If You click on a third party link, You will be
              directed to that third party's site. We strongly advise You to
              review the Privacy Policy of every site You visit.
            </Text>
            <Text style={styles.normalText}>
              We have no control over and assume no responsibility for the
              content, privacy policies or practices of any third party sites or
              services.
            </Text>
          </View>
          <Text style={styles.subHeader}>Changes to this Privacy Policy</Text>
          <View>
            <Text style={styles.normalText}>
              We may update Our Privacy Policy from time to time. We will notify
              You of any changes by posting the new Privacy Policy on this page.
            </Text>
            <Text style={styles.normalText}>
              We will let You know via email and/or a prominent notice on Our
              Service, prior to the change becoming effective and update the
              Last updated date at the top of this Privacy Policy.
            </Text>
            <Text style={styles.normalText}>
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </Text>
          </View>
          <Text style={styles.subHeader}>Contact Us</Text>
          <View>
            <Text style={styles.normalText}>
              If you have any questions about this Privacy Policy, You can
              contact us:
            </Text>

            <Text>Email: yusnaj21@gmail.com</Text>
            <Text>Phone number: 08105475021</Text>
            <Text>visit our page on: www.lunchapp.com</Text>
          </View>

          <Pressable
            style={styles.acceptButton}
            onPress={() => navigation.navigate("Settings")}
          >
            <Text style={styles.acceptText}>Continue</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  header: {
    color: "#390D7C",
    fontSize: fontScale * 22,
    fontWeight: "bold",
  },
  subHeader: {
    color: "#333",
    fontSize: fontScale * 16,
    fontWeight: "bold",
    marginVertical: 5,
  },
  textHeader: {
    color: "#333",
    fontWeight: "bold",
    alignSelf: "flex-start",
  },

  acceptButton: {
    backgroundColor: "#390D7C",
    padding: 20,
    width: width * 0.8,
    marginVertical: 20,
    borderRadius: 10,
  },
  acceptText: {
    color: "#E8E8E8",
    textAlign: "center",
    fontSize: fontScale * 18,
  },
  normalText: {
    textAlign: "left",
    marginVertical: 5,
  },
  listText: {
    textAlign: "left",
    fontWeight: "bold",
  },
});