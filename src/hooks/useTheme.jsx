import React, { useState, useEffect, createContext, useContext } from 'react';
import { ChevronDown, Github, ExternalLink, Mail, Phone, MapPin, Sun, Moon, Menu, X, Code, Palette, Database, Globe } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext.jsx';

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export { useTheme }