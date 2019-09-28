package com.niit.model;





import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.springframework.stereotype.Component;
@Entity
@Table(name="Userdetails")
@Component
public class Userdetails extends BaseDomain {
	
@Id @GeneratedValue(generator="system-uuid")
@GenericGenerator(name="system-uuid", strategy = "uuid")
private String userid;
@Column
	private String username;
	private String email;
	private String contact;
	private char is_online;
	private String password;
	private String address;
	private String Role;
	
	public Userdetails(String userid, String username, String email, String contact, char is_online, String password,
			String address, String role) {
		super();
		System.out.println(this.userid+":USErid:"+userid);
		//this.userid = userid;
		this.username = username;
		this.email = email;
		this.contact = contact;
		this.is_online = is_online;
		this.password = password;
		this.address = address;
		Role = role;
	}

	public char getIs_online() {
		return is_online;
	}

	public void setIs_online(char is_online) {
		this.is_online = is_online;
	}

	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}


	/* @OneToOne
	    @JoinColumn(name = "cartId")
	    @JsonIgnore
	    private Cart cart;*/
	public String getUserid() {
		return userid;
	}


	public void setUserid(String userid) {
		this.userid = userid;
	}

    public Userdetails() {
	
	}
	
	public String getRole() {
		return Role;
	}
	public void setRole(String role) {
		Role = role;
	}
		
	public String getUsername() {
		return username;
	}


	public void setUsername(String username) {
		this.username = username;
	}


	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getContact() {
		return contact;
	}
	public void setContact(String contact) {
		this.contact = contact;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	
	
	
}
