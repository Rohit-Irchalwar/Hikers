package com.cdac.hikers.hikersbackend.contact.repository;

import com.cdac.hikers.hikersbackend.contact.entities.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact, Integer> {
}
