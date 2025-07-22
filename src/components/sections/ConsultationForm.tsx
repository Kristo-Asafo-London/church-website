import styled from 'styled-components';
import { theme } from '../../styles/theme';
import { useState } from 'react';

const FormContainer = styled.div`
  background-color: ${theme.colors.light};
  padding: ${theme.spacing.xlarge};
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: ${theme.spacing.large};
  color: ${theme.colors.primary};
`;

const FormGroup = styled.div`
  margin-bottom: ${theme.spacing.medium};
  
  label {
    display: block;
    margin-bottom: ${theme.spacing.small};
    font-weight: 500;
    color: ${theme.colors.dark};
  }
  
  input, select, textarea {
    width: 100%;
    padding: ${theme.spacing.medium};
    border: 1px solid #ddd;
    border-radius: 4px;
    font-family: ${theme.fonts.primary};
    transition: border-color 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: ${theme.colors.secondary};
    }
  }
  
  textarea {
    min-height: 150px;
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: ${theme.spacing.medium};
  background-color: ${theme.colors.accent};
  color: ${theme.colors.white};
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: darken(${theme.colors.accent}, 10%);
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${theme.spacing.large};
  
  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const ConsultationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
  };

  return (
    <FormContainer>
      <FormTitle>Request a Consultation</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormRow>
          <FormGroup>
            <label htmlFor="firstName">First Name</label>
            <input 
              type="text" 
              id="firstName" 
              name="firstName" 
              value={formData.firstName}
              onChange={handleChange}
              required 
            />
          </FormGroup>
          
          <FormGroup>
            <label htmlFor="lastName">Last Name</label>
            <input 
              type="text" 
              id="lastName" 
              name="lastName" 
              value={formData.lastName}
              onChange={handleChange}
              required 
            />
          </FormGroup>
        </FormRow>
        
        <FormRow>
          <FormGroup>
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </FormGroup>
          
          <FormGroup>
            <label htmlFor="phone">Phone</label>
            <input 
              type="tel" 
              id="phone" 
              name="phone" 
              value={formData.phone}
              onChange={handleChange}
            />
          </FormGroup>
        </FormRow>
        
        <FormGroup>
          <label htmlFor="company">Company (optional)</label>
          <input 
            type="text" 
            id="company" 
            name="company" 
            value={formData.company}
            onChange={handleChange}
          />
        </FormGroup>
        
        <FormGroup>
          <label htmlFor="service">Service of Interest</label>
          <select 
            id="service" 
            name="service" 
            value={formData.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a service</option>
            <option value="strategy">Business Strategy</option>
            <option value="marketing">Marketing Consulting</option>
            <option value="operations">Operations Optimization</option>
            <option value="financial">Financial Advisory</option>
            <option value="other">Other</option>
          </select>
        </FormGroup>
        
        <FormGroup>
          <label htmlFor="message">Tell us about your project</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message}
            onChange={handleChange}
            required
          />
        </FormGroup>
        
        <SubmitButton type="submit">Request Consultation</SubmitButton>
      </form>
    </FormContainer>
  );
};