package com.bookisland.BookIsland.security;

import java.util.Arrays;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.bookisland.BookIsland.security.handler.AccessDeniedHandlerImpl;
import com.bookisland.BookIsland.security.handler.AuthenticationEntryPointImpl;
import com.bookisland.BookIsland.security.handler.AuthenticationFailureHandlerImpl;
import com.bookisland.BookIsland.security.handler.AuthenticationSuccessHandlerImpl;
import com.bookisland.BookIsland.security.handler.LogoutSuccessHandlerImpl;

@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private AuthenticationEntryPointImpl authenticationEntryPointImpl;

	@Autowired
	private AccessDeniedHandlerImpl accessDeniedHandlerImpl;

	@Autowired
	private AuthenticationSuccessHandlerImpl authenticationSuccessHandlerImpl;

	@Autowired
	private AuthenticationFailureHandlerImpl authenticationFailureHandlerImpl;

	@Autowired
	private LogoutSuccessHandlerImpl logoutSuccessHandlerImpl;

	@Autowired
	private UserDetailsService userServiceImpl;

	public void configure(HttpSecurity http) throws Exception {

		http.csrf().disable().cors();

		http.authorizeRequests((requests) -> requests
//				.antMatchers(HttpMethod.GET, "/products").permitAll()
//				.antMatchers(HttpMethod.GET, "/products/*").hasAuthority("ROLE_ADMIN") // or hasRole("ADMIN")
				.anyRequest()
				.permitAll());

		http.exceptionHandling().accessDeniedHandler(accessDeniedHandlerImpl)
				.authenticationEntryPoint(authenticationEntryPointImpl);

		http.formLogin().usernameParameter("username").passwordParameter("password")
				.successHandler(authenticationSuccessHandlerImpl).failureHandler(authenticationFailureHandlerImpl);

		http.logout().permitAll().logoutUrl("/logout").logoutSuccessHandler(logoutSuccessHandlerImpl);

		http.httpBasic();
	}

	@Bean // put the return object into spring container, as a bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder(11);
	}

	@Bean
	CorsConfigurationSource corsConfigurationSource() {
		CorsConfiguration configuration = new CorsConfiguration();
		configuration.setAllowedOrigins(Arrays.asList("http://localhost:80","https://bookisland.s3.us-east-2.amazonaws.com"));
		configuration.addAllowedOriginPattern("*"); // You should only set trusted site here. e.g. http://localhost:4200
													// means only this site can access.
		configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS"));
		configuration.addAllowedHeader("*");
		configuration.setAllowCredentials(true);
		UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
		source.registerCorsConfiguration("/**", configuration);
		return source;
	}


	@Autowired // @Autowired on function will autowired the parameters
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userServiceImpl).passwordEncoder(passwordEncoder());
	}
}
