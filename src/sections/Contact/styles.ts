import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export const WhatsappIcon = styled(FaWhatsapp)`
  margin-right: 8px; 
`;

export const ContactWrapper = styled.section`
  padding: ${({ theme }) => theme.spacings.xlarge} 0;
  background-color: ${({ theme }) => theme.colors.neutral}; 
`;

export const Container = styled.div`
  max-width: 1000px;
  width: 90%;
  margin: 0 auto;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 4.0rem;
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacings.medium};
  color: ${({ theme }) => theme.colors.text};

  span {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 3.2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.8rem;
  color: #666;
  margin-bottom: ${({ theme }) => theme.spacings.xlarge};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

export const ContentBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: ${({ theme }) => theme.spacings.xlarge};
`;

export const FormArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
`;

export const InfoContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  padding: ${({ theme }) => theme.spacings.large};
  border-radius: 12px 12px 0 0;
  margin-bottom: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacings.medium};
  }
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacings.small};
  font-size: 1.6rem;

  svg {
    margin-right: ${({ theme }) => theme.spacings.small};
    font-size: 2.0rem;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const FormCard = styled.div`
  background-color: #fff;
  padding: ${({ theme }) => theme.spacings.xlarge};
  border-radius: 0 0 12px 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: ${({ theme }) => theme.spacings.large};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacings.medium};
`;

export const Input = styled.input`
  width: 100%;
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1.6rem;
  background-color: #fcfcfc;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primary};
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1.6rem;
  background-color: #fcfcfc;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: none;
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.primary};
  }
`;

export const SubmitButton = styled(motion.button)`
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-size: 1.8rem;
  font-weight: bold;
  padding: 1.5rem 3.5rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 102, 204, 0.4);

  &:hover {
    background-color: #004d99; 
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 102, 204, 0.6);
  }
`;

interface StatusMessageProps {
    status: 'success' | 'error' | 'loading';
}

export const StatusMessage = styled.p<StatusMessageProps>`
  margin-bottom: ${({ theme }) => theme.spacings.small};
  padding: 1rem;
  border-radius: 8px;
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
  
  background-color: ${({ status }) => 
    status === 'success' ? '#e6ffe6' : status === 'error' ? '#ffe6e6' : '#fff5e6'};
  color: ${({ status }) => 
    status === 'success' ? '#006600' : status === 'error' ? '#cc0000' : '#ffa500'};
  border: 1px solid ${({ status }) => 
    status === 'success' ? '#a3e6a3' : status === 'error' ? '#ff8080' : '#ffbf80'};
`;