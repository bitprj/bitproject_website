import {
  Box,
  Button,
  Flex,
  Heading,
  ListItem,
  OrderedList,
  Text,
  Code,
  UnorderedList,
  Link,
  Img,
} from "@chakra-ui/react";
import { Step, Steps, useSteps } from "chakra-ui-steps";

const steps = [
  { label: "Premise" },
  { label: "The Task" },
  { label: "AWS Lambda" },
  { label: "Serverless Function" },
  { label: "API Gateway" },
  { label: "Code the Function" },
  { label: "Test" },
  { label: "Restore the NFT" },
];

const CustomList = ({ children }) => (
  <UnorderedList pl={4}>{children}</UnorderedList>
);

const CustomText = ({ children }) => (
  <Text fontSize="lg" my={4}>
    {children}
  </Text>
);

const CustomQuote = ({ children }) => (
  <Text
    fontSize="lg"
    my={4}
    fontStyle="italic"
    color="gray.400"
    borderLeft="4px solid"
    borderColor="gray.400"
    pl={4}
  >
    {children}
  </Text>
);

const Step1Premise = () => (
  <>
    <Heading fontSize="xl">Premise</Heading>
    <Text>
      A very important NFT was recently corrupted, and we need your help to
      restore the art! We have these tools handy:
    </Text>
    <CustomList>
      <ListItem>The RGB values of each pixel in the art</ListItem>
      <ListItem>A way to display hex values to restore the art</ListItem>
    </CustomList>
    <Text>
      However, we still don't have a way to efficiently convert RGB values to
      hex values to restore the NFT. That's where you come in.
    </Text>

    <Text color="blue.300" mt={2}>
      P.S. Click "next" to advance to the next step!
    </Text>
  </>
);

const Step2TheTask = () => (
  <>
    <Heading fontSize="xl">The Task</Heading>
    <CustomText>
      Your task is to harness the power of AWS Lambda serverless functions to
      deploy code in the cloud that:
    </CustomText>
    <CustomList>
      <ListItem>
        Receives an RGB value formatted as <Code>r,g,b</Code> through a
        parameter named <Code>rgb</Code>. For example,{" "}
        <Code>https://sample-url.com?rgb=255,255,255</Code>.
      </ListItem>
      <ListItem>
        Returns the equivalent hex value formatted as ffffff in a JSON object
        with hex as the key name. For example,{" "}
        <Code>&#123;"hex: "ffffff"&#125;</Code>.
      </ListItem>
    </CustomList>
    <CustomQuote>
      <b>💡 Tip</b>: Don&apos;t worry if you don&apos;t know how do work with
      the input and output of serverless functions! We&apos;ll walk through that
      later.
    </CustomQuote>

    <CustomText>
      In your portal, you will be automatically assigned pixel values that your
      function will restore when it functions correctly.
    </CustomText>

    <Heading fontSize="xl" mt={4}>
      What the heck is a serverless function?
    </Heading>
    <CustomText fontWeight="bold">Topics to be familiar with: </CustomText>
    <CustomList>
      <ListItem>HTTP Requests</ListItem>
      <ListItem>APIs</ListItem>
      <ListItem>"The Cloud"</ListItem>
    </CustomList>

    <CustomText>
      In short, a serverless function is a way to run code without worrying
      about how to host a server. It allows developers to run small snippets of
      code meant to be executed over and over again on servers they don't need
      to manage.{" "}
      <Link
        href="https://www.redhat.com/en/topics/cloud-native-apps/what-is-serverless"
        isExternal
        color="blue.300"
      >
        A deeper dive into what "serverless" is.
      </Link>
    </CustomText>

    <Heading fontSize="xl" mt={4}>
      Getting Started
    </Heading>
    <CustomText>To get started, please do the following:</CustomText>
    <CustomList>
      <ListItem>
        Make an account on{" "}
        <Link href="https://art-heist.vercel.app/" color="blue.300" isExternal>
          the workshop website
        </Link>
      </ListItem>
      <ListItem>
        Access your AWS account using the provided credentials.
      </ListItem>
    </CustomList>
  </>
);

const Step3AwsLambda = () => (
  <>
    <Heading fontSize="xl">AWS Lambda</Heading>
    <CustomText>
      Go to the homepage of AWS Lambda and click on the orange button named{" "}
      <Code>Get Started with AWS Lambda</Code>.
      <Img src="/art-heist/step_3_aws.png" />
    </CustomText>
  </>
);

const Step4ServerlessFunction = () => (
  <>
    <Heading fontSize="xl">Serverless Function</Heading>
    <CustomText>
      On the dashboard of AWS Lambda, click on the orange button titled{" "}
      <Code>Create function</Code>.
    </CustomText>
    <Img src="/art-heist/step_4_serverless.png" />

    <CustomText>
      Leave the default settings as is and name the function whatever you want!
      (Ideally, it should be something identifiable later.) Press the{" "}
      <Code>Create function</Code> button at the bottom right corner to create
      the function.
    </CustomText>
  </>
);

const Step5ApiGateway = () => (
  <>
    <Heading fontSize="xl">API Gateway</Heading>
    <CustomText>
      An{" "}
      <Link
        href="https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html"
        isExternal
        color="blue.300"
      >
        API Gateway
      </Link>{" "}
      acts as a "doorway" to expose your AWS resources to the public; a way to
      let information in and direct it out. In our case, it'll act as a way for
      users to pass in a RGB color value through a parameter.
    </CustomText>

    <CustomText>
      Navigate to{" "}
      <Link
        href="https://aws.amazon.com/api-gateway/"
        color="blue.300"
        isExternal
      >
        this page
      </Link>{" "}
      and click Get started with <Code>Amazon API Gateway</Code>.
    </CustomText>

    <CustomText>
      Click on <Code>Build</Code> for the <Code>HTTP API</Code> option.
    </CustomText>

    <CustomQuote>
      <b>Why are we not using a REST API?</b> They have more options that make
      the API more secure, but those are not necessary for this use case.
    </CustomQuote>

    <Img src="/art-heist/step_5_img1.png" />

    <CustomText>
      At <Code>Step 1</Code>, select <Code>Lambda</Code> as an integration and
      find the function you just created in the dropdown. Name your API.
    </CustomText>
    <Img src="/art-heist/step_5_img2.png" />

    <CustomText>
      Click <Code>Next</Code> to go to <Code>Step 2</Code> and delete the text
      in <Code>Resource Path</Code>. Keep clicking <Code>Next</Code> until you
      get to <Code>Step 4: Review and create</Code>. Then, click{" "}
      <Code>Create</Code>.
    </CustomText>

    <Img src="/art-heist/step_5_img3.png" />

    <CustomText>
      Lastly, make sure to keep this URL in handy! We'll be using it to access
      our Lambda function.
    </CustomText>

    <Img src="/art-heist/step_5_img4.png" />
  </>
);

const Step6CodeTheFunction = () => (
  <>
    <Heading fontSize="xl">Code the Function</Heading>
    <CustomText>
      Click on the <Code>index.mjs</Code> file in the browser IDE that should
      have opened once your function was created.
    </CustomText>

    <CustomText>
      If you closed that tab, navigate back with{" "}
      <Link
        href="https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Fus-east-1.console.aws.amazon.com%2Flambda%2Fhome%3FhashArgs%3D%2523%252Ffunctions%26isauthcode%3Dtrue%26region%3Dus-east-1%26state%3DhashArgsFromTB_us-east-1_5087de69c8bf39cb&client_id=arn%3Aaws%3Asignin%3A%3A%3Aconsole%2Flambda&forceMobileApp=0&code_challenge=mwBzTUJPC50aDI5KccV-cVCoeCvRrJ3VDuwlAxrvd34&code_challenge_method=SHA-256"
        color="blue.300"
        isExternal
      >
        this link
      </Link>
      .
    </CustomText>

    <CustomText>
      <em>
        This is where the code for your serverless function will be edited and
        deployed
      </em>
    </CustomText>

    <Img src="/art-heist/step_6_img1.png" />

    <CustomText>Recall that your function should do three things:</CustomText>

    <CustomList>
      <ListItem>
        Receive a RGB color value as an input from a URL parameter named{" "}
        <Code>rgb</Code>.
      </ListItem>

      <ListItem>Convert the RGB color value to its hex equivalent.</ListItem>

      <ListItem>
        Return the hex equivalent in a JSON object formatted as
        <Code>&#123;"hex: "ffffff"&#125;</Code>
      </ListItem>
    </CustomList>

    <CustomText>
      <b>Starter Code</b>
    </CustomText>

    <Code whiteSpace={"pre"} d="block" pl={4} overflowX="scroll">{`
import json

def lambda_handler(event, context):
    # Get the RGB value from the event object (parameter)
    rgb = event["queryStringParameters"]["rgb"]
    # Split the RGB value into separate red, green, and blue values
    split_rgb = rgb.split(',')
    
    # Access each hex value by indexes (make sure to convert to integer!)
    red = # Your code here
    green = # Your code here
    blue = # Your code here
    # Convert the red, green, blue color values to hex representation
    hex_red = # Your code here
    hex_green = # Your code here
    hex_blue = # Your code here
    
    # Concatenate hex values
    hex_value = # Your code here
    
    # Return the hex value
    return { 'hex': hex_value}
    `}</Code>

    <CustomText>
      <b>1. Parameters</b>
    </CustomText>

    <CustomText>
      <Link
        href="https://www.searchenginejournal.com/technical-seo/url-parameter-handling/#:~:text=What%20Are%20URL%20Parameters%3F,page%20by%20using%20an%20ampersand."
        color="blue.300"
        isExternal
      >
        URL Parameters
      </Link>{" "}
      are a simply a way of passing information. They look like this:{" "}
      <Code>www.test.com?parameter1=value1&parameter2=value2</Code>
    </CustomText>

    <CustomText>
      In our case, we put this line in our code to receive the "rgb" parameter.
      <Code>rgb = event["queryStringParameters"]["rgb"]</Code>
    </CustomText>

    <CustomText>
      <b>2. Converting Values</b>
    </CustomText>

    <CustomList>
      <ListItem>
        <Link
          href="https://users.cs.utah.edu/~germain/PPS/Topics/color.html"
          color="blue.300"
          isExternal
        >
          What are RGB and hex values and how do they relate to each other?
        </Link>
      </ListItem>

      <ListItem>
        <Link
          href="https://imagecolorpicker.com/en"
          color="blue.300"
          isExternal
        >
          Experimenting with hex and RGB values
        </Link>
      </ListItem>
    </CustomList>

    <CustomText>
      First, keep in mind that the input type of the RGB value is a string and
      that it is formatted like <Code>r,g,b</Code>.
    </CustomText>

    <CustomText>
      A user would've passed it in the URL like so, where the red, green, and
      blue values are all 1.
    </CustomText>

    <CustomText>
      <Code>www.test.com?rgb=1,1,1</Code>
    </CustomText>

    <CustomText>
      The next line of code splits the user's input into a Python List with the
      separated red, green, and blue values.
    </CustomText>
    <CustomText>
      <Code whiteSpace={"pre"} d="block" pl={4} overflowX="scroll">
        {`
split_rgb = rgb.split(',')
# Example value of split_rgb: [1, 1, 1]
      `}
      </Code>
    </CustomText>

    <CustomText>
      Using <Code>split_rgb</Code>, assign the red, green, and blue values from
      the List to their own variables. Be sure to convert them to integers!
    </CustomText>

    <CustomText>
      <Code whiteSpace={"pre"} d="block" pl={4} overflowX="scroll">
        {`
red = # Your code here
green = # Your code here
blue = # Your code here
      `}
      </Code>
    </CustomText>

    <CustomText>
      Format strings in Python can come in handy when you're converting between
      data values. Using this format string{" "}
      <Code>{`f'{your_variable:02x}'`}</Code>, format the <Code>red</Code>,{" "}
      <Code>green</Code>, and <Code>blue</Code> RGB values in hex.
    </CustomText>

    <CustomText>
      <Code whiteSpace={"pre"} d="block" pl={4} overflowX="scroll">
        {`
hex_red = # Your code here
hex_green = # Your code here
hex_blue = # Your code here
      `}
      </Code>
    </CustomText>

    <CustomText>
      Finally, concatenate the values (now in hex) together in order of red,
      green, and blue to create a full color hex code.
    </CustomText>

    <CustomText>
      <Code whiteSpace={"pre"} d="block" pl={4} overflowX="scroll">
        {`
hex_value = # Your code here
      `}
      </Code>
    </CustomText>

    <CustomText>
      <b>3. Returning a Response</b>
    </CustomText>

    <CustomText>
      To return a response to the HTTP request, simply modify the response
      object that was in the starter code.
    </CustomText>

    <CustomText>
      <Code whiteSpace={"pre"} d="block" pl={4} overflowX="scroll">{`
return { 'hex': hex_value}
      `}</Code>
    </CustomText>

    <CustomQuote>
      💡 <b>Where is this returning to?</b> If you're confused about where the
      function is returning its information to, head to the next section to see
      your lambda function in action.
    </CustomQuote>
  </>
);

const Step7Test = () => (
  <>
    <Heading fontSize="xl">Test the Function</Heading>
    <CustomText>
      Get your URL you obtained from your API Gateway back in Step 3.
    </CustomText>

    <CustomText>
      <b>Case 1:</b>
    </CustomText>

    <CustomText>
      <Code>https://yoururl.com?rgb=100,100,100</Code>
    </CustomText>

    <CustomText>
      <b>Expected Result:</b>
    </CustomText>

    <CustomText>
      <Code>&#123;"hex: "646464"&#125;</Code>.
    </CustomText>

    <CustomText>
      <b>Case 2:</b>
    </CustomText>

    <CustomText>
      <Code>https://yoururl.com?rgb=8,45,240</Code>
    </CustomText>

    <CustomText>
      <b>Expected Result:</b>
    </CustomText>

    <CustomText>
      <Code>&#123;"hex: "082df0"&#125;</Code>.
    </CustomText>

    <CustomText>
      <b>Checking your logs!</b>
    </CustomText>

    <CustomText>
      Don't know what's erroring out? Click on <Code>Monitor</Code> on the top
      menu bar.
    </CustomText>

    <Img src="/art-heist/step_7_img1.png" />

    <CustomText>
      Then, click on the most recent <Code>LogStream</Code> to see your
      function's logs.
    </CustomText>

    <Img src="/art-heist/step_7_img2.png" />
  </>
);

const Step8RestoreTheFt = () => (
  <>
    <Heading fontSize="xl">Restore the NFT</Heading>
    <Img src="/art-heist/step_8_img1.png" />

    <CustomText>
      To see if your function is able to correctly restore the NFT, navigate to{" "}
      <Link
        href="https://art-heist.vercel.app/test"
        color="blue.300"
        isExternal
      >
        /test
      </Link>{" "}
      and submit the function's URL. You will:
      <CustomList>
        <ListItem>
          See feedback about which hex values were correct and which were not.
        </ListItem>

        <ListItem>
          Be able to see your successfully restored pixels on{" "}
          <Link
            href="https://art-heist.vercel.app/art"
            color="blue.300"
            isExternal
          >
            /art
          </Link>{" "}
          along with your peers&apos;.
        </ListItem>
      </CustomList>
    </CustomText>

    <Img src="/art-heist/step_8_img2.png" />

    <CustomQuote>
      <b>💡 Tip</b>: Roll your mouse over filled in pixels to see who did it and
      the time it was restored!
    </CustomQuote>

    <CustomText>Submit your function again to keep testing it.</CustomText>
  </>
);

export const Basic = ({ variant = "circle" }) => {
  // const items = [Step1Premise, Step2TheTask, Step3AwsLambda, Step4ServerlessFunction, Step5ApiGateway, Step6CodeTheFunction, Step7Test, Step8RestoreTheFt];
  const items = [
    Step1Premise,
    Step2TheTask,
    Step3AwsLambda,
    Step4ServerlessFunction,
    Step5ApiGateway,
    Step6CodeTheFunction,
    Step7Test,
    Step8RestoreTheFt,
  ];
  const { nextStep, prevStep, reset, activeStep } = useSteps({
    initialStep: 0,
  });
  const isLastStep = activeStep === steps.length - 1;
  const hasCompletedAllSteps = activeStep === steps.length;
  const bg = "gray.800";

  return (
    <Flex flexDir="column" width="100%">
      <Steps
        variant={variant}
        colorScheme="blue"
        activeStep={activeStep}
        orientation="vertical"
        color="white"
      >
        {steps.map(({ label }, index) => (
          <Step label={label} key={label}>
            <Box
              sx={{ p: 8, bg, my: 8, rounded: "md" }}
              fontSize="lg"
              textAlign="left"
              color="gray.100"
            >
              {items[index] && items[index]({ activeStep, index })}
            </Box>
            <Flex width="100%" justify="flex-end" gap={4}>
              {!hasCompletedAllSteps && (
                <>
                  <Button
                    isDisabled={activeStep === 0}
                    onClick={prevStep}
                    size="md"
                    bg="transparent"
                    color="blue.300"
                  >
                    Prev
                  </Button>
                  <Button
                    size="md"
                    onClick={nextStep}
                    color="white"
                    bg="blue.400"
                  >
                    {isLastStep ? "Finish" : "Next"}
                  </Button>
                </>
              )}
            </Flex>
          </Step>
        ))}
      </Steps>
      {hasCompletedAllSteps && (
        <Box sx={{ bg, my: 8, p: 8, rounded: "md" }} textAlign="center">
          <Heading fontSize="xl" textAlign={"center"} color="white">
            Woohoo! All steps completed! 🎉
          </Heading>
          <Button size="md" onClick={reset} color="white" bg="blue.400" mt={4}>
            Reset
          </Button>
        </Box>
      )}
    </Flex>
  );
};
