package com.lovecode.pretbancaire.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Builder;
import lombok.Data;

import java.io.Serializable;
import java.sql.Date;
import java.sql.Timestamp;

@Data
@Entity
@Table(name = "bank_loan")
public class BankLoan implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long accountNumber;

    @Size(min = 3, message = "Customer name must be at least 2 characters long")
    @NotBlank(message = "Customer name must not be blank")
    @Column(name = "customer_name")
    private String customerName;

    @Size(min = 3, message = "Bank name must be at least 2 characters long")
    @NotBlank(message = "Bank name must not be blank")
    @Column(name = "banck_name")
    private String bankName;

    @NotNull(message = "Amount must not be null")
    @Column(name = "amount")
    private int amount;

    //@JsonFormat(pattern="dd/MM/yyyy")
    @Column(name = "loan_dateat")
    private Date loanDate;

    @NotNull(message = "Loan rate must not be null")
    @Column(name = "loan_rate")
    private int loanRate;

    public Long getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(Long accountNumber) {
        this.accountNumber = accountNumber;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getBankName() {
        return bankName;
    }

    public void setBankName(String bankName) {
        this.bankName = bankName;
    }

    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    public Date getLoanDate() {
        return loanDate;
    }

    public void setLoanDate(Date loanDate) {
        this.loanDate = loanDate;
    }

    public int getLoanRate() {
        return loanRate;
    }

    public void setLoanRate(int loanRate) {
        this.loanRate = loanRate;
    }

    @Override
    public String toString() {
        return "BankLoan{" +
                "accountNumber=" + accountNumber +
                ", customerName='" + customerName + '\'' +
                ", bankName='" + bankName + '\'' +
                ", amount=" + amount +
                ", loanDate=" + loanDate +
                ", loanRate=" + loanRate +
                '}';
    }
}
