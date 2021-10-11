//package com.coffee.houserentingwebapi;
//
//        import org.junit.Ignore;
//        import org.junit.Test;
//        import org.junit.runner.RunWith;
//        import org.springframework.beans.factory.annotation.Autowired;
//        import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
//        import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
//        import org.springframework.boot.test.context.SpringBootTest;
//        import org.springframework.http.MediaType;
//        import org.springframework.test.context.junit4.SpringRunner;
//        import org.springframework.test.web.servlet.MockMvc;
//
//        import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
//        import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
//        import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
//        import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
//
//@RunWith(SpringRunner.class)
//@SpringBootTest
//@AutoConfigureTestDatabase
//@AutoConfigureMockMvc
//public class UserControllerIntegrationTest {
//
//    private final String ACCOUNT_ENDPOINT = "/api/auth/signup";
//    @Autowired
//    private MockMvc mockMvc;
//
//    @Test
//    public void shouldCreateAnAccountWithValidInformation() throws Exception {
//        String payload = "{\n" +
//                "  \"firstName\": \"Daniel\",\n" +
//                "  \"middleName\": \"Zenebe\",\n" +
//                "  \"lastName\": \"Solomon\",\n" +
//                "  \"phoneNumber\": \"+1898882822\",\n" +
//                "  \"email\": \"danielzenebe2@gmail.com\",\n" +
//                "  \"dateOfBirth\": \"2000-01-01\",\n" +
//                "  \"password\": 233222\n" +
//                "}";
//        mockMvc.perform(
//                        post(ACCOUNT_ENDPOINT)
//                                .contentType(MediaType.APPLICATION_JSON)
//                                .content(payload)
//                )
//                .andDo(print())
//                .andExpect(status().isOk())
//                .andExpect(content().json("{\"id\":1,\"firstName\":\"Daniel\",\"middleName\":\"Zenebe\"," +
//                        "\"lastName\":\"Solomon\",\"email\":\"danielzenebe@gmail.com\",\"phoneNumber\":\"+1898882822\"," +
//                        "\"dateOfBirth\":\"2000-01-01\",\"password\":233222,\"isVerified\":true}"))
//                .andExpect(content().contentType(MediaType.APPLICATION_JSON_VALUE));
//    }
//
//    @Ignore
//    public void shouldFailBecausePhoneNumberAndEmailIsNotEmpty() throws Exception {
//
//        String payload = "{\n" +
//                "  \"firstName\": \"Daniel\",\n" +
//                "  \"middleName\": \"Zenebe\",\n" +
//                "  \"lastName\": \"Solomon\",\n" +
//                "  \"dateOfBirth\": \"2000-01-01\",\n" +
//                "  \"password\": 233222\n" +
//                "}";
//
//        mockMvc.perform(
//                        post(ACCOUNT_ENDPOINT)
//                                .contentType(MediaType.APPLICATION_JSON)
//                                .content(payload)
//                )
//                .andDo(print())
//                .andExpect(status().isBadRequest());
//    }}