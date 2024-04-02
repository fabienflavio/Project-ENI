package com.lovecode.pretbancaire.repository;

import com.lovecode.pretbancaire.entity.BankLoan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BankLoanRepository extends JpaRepository<BankLoan, Long> {
}
