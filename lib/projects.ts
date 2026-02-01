import fs from 'fs';
import path from 'path';

export interface Project {
  id: string;
  title: string;
  category: string;
  status: 'completed' | 'ongoing';
  description: string;
  location: string;
  completionDate: string;
  area: string;
  client: string;
  features: string[];
  images: string[];
  thumbnail: string;
}

const projectsDirectory = path.join(process.cwd(), 'public', 'projects');

export function getAllProjects(): Project[] {
  if (!fs.existsSync(projectsDirectory)) {
    return [];
  }

  const projectFolders = fs.readdirSync(projectsDirectory);

  const projects = projectFolders
    .filter((folder) => {
      const projectPath = path.join(projectsDirectory, folder);
      return fs.statSync(projectPath).isDirectory();
    })
    .map((folder) => {
      const projectJsonPath = path.join(projectsDirectory, folder, 'project.json');

      if (!fs.existsSync(projectJsonPath)) {
        return null;
      }

      const fileContents = fs.readFileSync(projectJsonPath, 'utf8');
      const project = JSON.parse(fileContents);

      return {
        ...project,
        images: project.images.map((img: string) => `/projects/${folder}/${img}`),
        thumbnail: `/projects/${folder}/${project.thumbnail}`,
      };
    })
    .filter((project): project is Project => project !== null);

  return projects;
}

export function getProjectById(id: string): Project | null {
  const projects = getAllProjects();
  return projects.find((project) => project.id === id) || null;
}

export function getProjectsByStatus(status: 'completed' | 'ongoing'): Project[] {
  const projects = getAllProjects();
  return projects.filter((project) => project.status === status);
}

export function getProjectsByCategory(category: string): Project[] {
  const projects = getAllProjects();
  return projects.filter((project) => project.category === category);
}

export function getAllCategories(): string[] {
  const projects = getAllProjects();
  const categories = new Set(projects.map((project) => project.category));
  return Array.from(categories);
}
